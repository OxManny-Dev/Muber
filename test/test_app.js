const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('The express app', () => {
  it('should handle a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, res) => {
        assert(res.body.hello === 'there');
        done();
      });
  });
});
