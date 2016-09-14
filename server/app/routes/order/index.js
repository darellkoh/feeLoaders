var orders = require('express').Router(); // eslint-disable-line new-cap
module.exports = orders;

var Order = require('../../../db/models/order.js');

///////////////////////////////////////////
//	Route: api/orders
///////////////////////////////////////////


// Returns all orders if you just ping the /orders route
orders.get( '/', function(req, res, next){

	Order.findAll()
		.then(function(allOrders){

			if ( !allOrders ){
				res.sendStatus(404);
			}
			else {
				res.status(200).send(allOrders);
			}
		})
		.catch(next);

});

// Return an individual order
orders.get( '/:id', function( req, res, next){

	Order.findById(req.params.id)
		.then( function(specificOrder){

			if ( !specificOrder ){
				res.sendStatus(404);
			}
			else {
				res.status(200).send(specificOrder);
			}
		})
		.catch(next);

});
