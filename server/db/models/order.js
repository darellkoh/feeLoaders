var Sequelize = require('sequelize');
var db = require('../_db');

var modelOptions = {};

  modelOptions.classMethods = {};
  modelOptions.classMethods.getOrder = function(idOfOrder){
      return this.findAll({
        where: {
          order_id: idOfOrder
        }
      })
    }

  modelOptions.classMethods.getOrderTotal = function(idOfOrder){
      return this.getOrder(idOfOrder)
              .then(function(arrayOfOrders){
              var sumTotal = 0;
                arrayOfOrders.forEach(function(order){
                  sumTotal += order.product_cost;
                })
                return sumTotal;
              })
    }

module.exports = db.define('order', {

  date: {
    type: Sequelize.DATE()
  },

  quantity: {
    type: Sequelize.INTEGER()
  },

  product_cost: {
    type: Sequelize.FLOAT()
  },

//unsure if we need these right now, but we added them anyway
//may be set up by associations
  order_id: {
    type: Sequelize.INTEGER()
  },

  product_id: {
    type: Sequelize.INTEGER()
  },

  user_id: {
    type: Sequelize.INTEGER()
  }

}, modelOptions );
