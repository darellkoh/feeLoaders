var expect = require('chai').expect;

var Sequelize = require('sequelize');

var db = require('../../../server/db');

var supertest = require('supertest');

describe('Product Route', function () {

  var app, Product;

    beforeEach('Sync DB', function () {
        return db.sync({ force: true });
    });

    beforeEach('Create app', function () {
        app = require('../../../server/app')(db);
        Product = db.model('product');
    });

    var productInfo = {
      id: 1,
      name: 'ToothBrush',
      description: 'A really nice toothbrush.',
      price: 500,
      inStock: 5,
      tags: ['clean','teeth','hygiene'],
      category: 'toiletries'
    }

    beforeEach('Create a Product', function (done) {
      return Product.create(productInfo).then(function (product) {
                done();
            }).catch(done);
    });

    describe('Product route responds with created product.', function () {

      var orderAgent;

      beforeEach('Create order agent', function () {
        orderAgent = supertest.agent(app);
      });

      it('should get a 200 response from the products route and the first product should have an id of 1', function (done) {
        orderAgent.get('/api/products/')
          .expect(200)
          .end(function (err, response) {
            if (err) return done(err);
            expect(response.body).to.be.an('array');
            expect(response.body[0].id).to.eql(productInfo.id);
            expect(response.body.length).to.eql(1);
            done();
          });
      });

    });


})