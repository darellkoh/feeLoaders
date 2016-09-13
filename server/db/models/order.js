//order as a group

var Sequelize = require('sequelize')
var db = require('../_db');

module.exports = db.define('order', {

  //ASSOCIATIONS: user_id
  
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },

  isOrderComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  }

})
