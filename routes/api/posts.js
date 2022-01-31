const express = require('express');
const router = express.Router();

// Create    Route
// @route    POST api/users
// @desc     Posts user
// @access   Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
