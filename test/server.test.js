const supertest = require('supertest');
const chai = require('chai');
const app = require('../index'); // Adjust the path to your index.js file

const expect = chai.expect;
const request = supertest(app);

describe('GET /', () => {
  it('should respond with Welcome to my Travel Booking site!', (done) => {
    request.get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to my Travel Booking site!');
        done(err);
      });
  });
});
