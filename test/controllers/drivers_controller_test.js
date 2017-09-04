const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers Controller', () => {
  it('should POST to /api/drivers and create a new driver', (done) => {
    Driver.count().then((count) => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com'})
        .end((err, res) => {
          Driver.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});

beforeEach( done => {
  const { drivers } = mongoose.connections.collections
  drivers.drop()
    .then( () => done();)
    // in case there's no collections to drop, it will throw an error
    .catch( (err) => console.log("Error", err););
});
