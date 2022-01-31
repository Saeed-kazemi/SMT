const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');
// Create    Route
// @route    GET api/auth
// @desc     Register and Get user by token
// @access   Public
router.get('/', auth, async (req, res) => {
  //getting user data except password
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  // setting validation for data with express-validator

  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),

  async (req, res) => {
    // set errors to validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // returning code 400 as the filed havent been filled correctly
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      // Cet user info
      let user = await User.findOne({ email });

      if (!user) {
        // checking with errors array as well as sending user already exists
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Check matching user's credentials

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return JWT
      // getting payload includin user id
      const payload = {
        user: {
          id: user.id,
        },
      };
      // change the number to 3600 when ready to deploy to expirre the token in one hour
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          // callback
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

module.exports = router;
