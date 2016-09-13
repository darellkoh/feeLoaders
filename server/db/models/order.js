//order as a group

var Sequelize = require('sequelize')
var db = require('../_db');

module.exports = db.define('order', {

  //associated with order-line-item table
  //ASSOCIATIONS: user_id, PRIMARY KEY
  date: {
    type: Sequelize.DATE
  }

})
