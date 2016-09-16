/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Product = db.model('product');

var Review = db.model('review');
var OrderItem = db.model('orderItem');
var Order = db.model('order');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });

    return Promise.all(creatingUsers);

};

var seedProducts = function () {

    var products = [
        {
            name: 'google search',
            description: 'A google search.',
            price: 500,
            inStock: 600,
            tags: ['wasteOfMoney','dummyTag'],
            category: 'google'
        },
        {
            name: 'bottle of tap water',
            description: 'bottle of NYC tap water',
            price: 700,
            inStock: 800,
            tags: ['wasteOfMoney','dummyTag2'],
            category: 'miladsSink'
        }
    ];

    // JOE: Promise.map instead of Array.map+Promise.all
    var creatingProducts = products.map(function (projectObj) {
        return Product.create(projectObj);
    });

    return Promise.all(creatingProducts);
};

db.sync({ force: true })
    .then(function () {
        return seedUsers();
    })
    .then(function () {
        console.log(chalk.green('Seed users successful!'));
        //process.exit(0);
    })
    .then(function(){
        return seedProducts();
    })
    .then(function () {
        console.log(chalk.green('Seed products successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
