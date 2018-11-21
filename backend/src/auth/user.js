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
    const sendUser = await user.save();
    res.json({
      message: "Done",
      user: user
    });
  } catch(err) {
    res.status(422).send({
      error: err
    });
  }
});
router.post('/login', (req, res, next) => {
  User.findOne({ username: req.body.username })
  .exec()
  .then(user => {
    if(user) {
      payload = {
        _id: user._id,
        username: user.username
      }
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' });
      if (token) {
        res.send({
          token: token
        });
      } else {
        res.status(500).send({
          error: "Internal Server Error 500",
          stack: err.stack
        });
      }
    } else {
      res.status(401).send({
        error: "User not found"
      })
    }
  }).catch(err => res.status(422).send({ error: err.stack }));
});

module.exports = router;