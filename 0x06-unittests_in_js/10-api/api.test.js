const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  it('GET / should return 200 status and correct message', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('GET /cart/:id should return 200 for valid id', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/:id should return 404 for invalid id', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('GET /available_payments should return correct object', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', () => {
  it('POST /login should return correct message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'Betty' }
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
