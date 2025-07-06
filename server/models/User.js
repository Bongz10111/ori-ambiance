// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 50 },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
