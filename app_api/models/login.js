const mongoose = require('mongoose');

const userRegistrationSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('userRegistration', userRegistrationSchema); //
