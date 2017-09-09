const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: { type: String, default: 'Point'},
  coordinates: { type: [ Number ], index: '2dsphere'}
});

const DriverSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  },
  geometry: PointSchema
});


const Driver = mongoose.model('driver', DriverSchema);

module.exports = Driver;
