const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true, match: /[^A-Z]*/ },
  password: { type: String, required: true, match: /[^!@#$%&*]*/ }
});

module.exports = mongoose.model('User', userSchema);