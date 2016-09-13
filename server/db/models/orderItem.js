var Sequelize = require('sequelize');
var db = require('../_db');

//SINGLE ORDER LINE-ITEMS IN OUR ORDER GROUP

module.exports = db.define('orderItem', {

 //order_id is our primary key
 //

  quantity: {
    type: Sequelize.INTEGER
  },

  product_cost: {
    type: Sequelize.INTEGER
  }


//may be set up by associations

  // product_id: {
  //   type: Sequelize.INTEGER
  // },

  // user_id: {
  //   type: Sequelize.INTEGER
  // }

});







/* coming back to modelOptions later */

// var modelOptions = {};

//   modelOptions.classMethods = {};
//   modelOptions.classMethods.getOrder = function(idOfOrder){
//       return this.findAll({
//         where: {
//           order_id: idOfOrder
//         }
//       })
//     }

//   modelOptions.classMethods.getOrderTotal = function(idOfOrder){
//       return this.getOrder(idOfOrder)
//               .then(function(arrayOfOrders){
//               var sumTotal = 0;
//                 arrayOfOrders.forEach(function(order){
//                   sumTotal += order.product_cost;
//                 })
//                 return sumTotal;
//               })
//     }
