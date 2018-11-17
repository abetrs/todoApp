const express = require('express');
router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./user-model');

router.post('/signup', async (req, res, next) => {
  try {
    const hashedPass = await bcrypt.hash(req.body.password, 12);
    const user = new User({
      username: req.body.username,
      password: hashedPass
    });
    await user.save();
    res.json({
      message: "Done"
    });
  } catch(err) {
    res.status(422).send({
      error: err
    });
  }
});
router.post('/login', (req, res, next) => {
  res.send({
    message: "You logged in"
  })
});
router.post('/logout', (req, res, next) => {
  res.send({
    message: "Logged out"
  });
});

module.exports = router;