const express = require('express');
router = express.Router();

router.post('/signup', (req, res, next) => {
  res.send({
    message: "Signed up!"
  })
});
router.post('/login', (req, res, next) => {
  res.send({
    message: "Logged in"
  })
});
router.post('/logout', (req, res, next) => {
  res.send({
    message: "Logged out"
  });
});

module.exports = router;