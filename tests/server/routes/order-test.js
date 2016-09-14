var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Order Route', function () {

  var app, Order;

    beforeEach('Sync DB', function () {
        return db.sync({ force: true });
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Order = db.model('order');
    });

    var orderInfo = {
      id: 1,
      date: new Date(),
      isOrderComplete: true
    }

    beforeEach('Create an Order', function (done) {
      return Order.create(orderInfo).then(function (order) {
                done();
            }).catch(done);
    });

    describe('it got an order', function () {

      var orderAgent;

      beforeEach('Create order agent', function () {
        orderAgent = supertest.agent(app);
      });

      it('should get a 200 response from a get all orders and the first order have an id of 1', function (done) {
        orderAgent.get('/api/orders/')
          .expect(200)
          .end(function (err, response) {
            if (err) return done(err);
            expect(response.body).to.be.an('array');
            expect(response.body[0].id).to.eql(orderInfo.id);
            expect(response.body.length).to.eql(1);
            done();
          });
      });

    });
});

