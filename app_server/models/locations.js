const mongoose = require('mongoose');


const driverSchema = new mongoose.Schema({
  Driver: {
  type: String,
  required: true
  },
  Number: {
    type: Number,
    min: 1,
    max: 100
  },
  Points: {
  type: Number,
  'default': 0,
  min: 0,
  max: 1000
  },
  Country: {
    type: String,
    required: true
  },
  Team: {
    type: String,
    required: true
  }
});

mongoose.model('Driver', driverSchema);
