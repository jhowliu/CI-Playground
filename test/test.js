const expect = require('chai').expect;
const request = require('request');

const app = require('../app.js');

const port = process.env.PORT || 8080;

describe('#Server Response', () => {
  it('it should get Hello World', (done) => {
    request.get('http://localhost:'+port, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal('Hello World');
      done();
    });
  });

  it('it should be JSON', (done) => {
    request.get('http://localhost:'+port+'/home', (err, res, body) => {
      expect(res.body).to.be.a('string');
      done();
    })
  });

  after(() => {
    app.close();
  });
});
