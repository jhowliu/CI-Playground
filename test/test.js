const expect = require('chai').expect;
const request = require('request');

const app = require('../app.js');


describe('#Server Response', () => {
  it('it should get Hello World', (done) => {
      request.get('http://localhost:3000', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal('Hello World');
        done();
    });
  });

  after(() => {
    app.close();
  });
});
