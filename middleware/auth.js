const jwt = require('jsonwebtoken');
const config = require('config');

// middleware function
module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if not token

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token received, authorisation denied' });
  }

  // Verify token
  //   try {
  //     jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
  //       if (error) {
  //         return res.status(401).json({ msg: 'Token is not valid' });
  //       } else {
  //         req.user = decoded.user;
  //         next();
  //       }
  //     });

  // Verify and decode the token

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // assigning value to the user which has an id in payload
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
