const mongoose = require('mongoose');

before( done => {
  mongoose.connect('mongodb://localhost/test_muber');
  mongoose.connection
    .once('open', () => done());
    .on('err', err => {
      console.warn('Warning', err);
    })
    .catch((error), () => {
      console.log(error);
    });
});
