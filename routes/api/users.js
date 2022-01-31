const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require('express-validator');

// User model import
const User = require('../../models/User');

// Create    Route
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  // setting validation for data with express-validator

  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 8 or more characters'
  ).isLength({ min: 8 }),

  async (req, res) => {
    // set errors to validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // returning code 400 as the filed havent been filled correctly
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // Check if user exists to send error using mongoose
      let user = await User.findOne({ email, name });

      if (user) {
        // checking with errors array as well as sending user already exists
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Get users gravetar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      // create an instante of user
      user = new User({
        name,
        email,
        avatar,
        password, // not hashed yet
      });

      // Encrypt password before adding to db
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // save user to db
      await user.save();

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
