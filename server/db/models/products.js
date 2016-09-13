'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    in_stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        }
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
