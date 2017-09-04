const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});


const Driver = mongoose.model('driver', DriverSchema);
