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
    // JOE: column name makes me think BOOLEAN
    inStock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0
        }
    },
    // JOE: Tag as its own model with belongsToMany
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING) /* eslint-disable-line new-cap */
    },
    // JOE: Category as its own model with belongsToMany
    category: {
        type: Sequelize.ENUM('Google', 'Only In New York'),
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        defaultValue: 'http://image.spreadshirtmedia.com/image-server/v1/compositions/19354318/views/1,width=280,height=280,appearanceId=2,version=1440417743.png/lightning-cat_design.png',
    }
});
