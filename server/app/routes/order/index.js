var orders = require('express').Router(); // eslint-disable-line new-cap
module.exports = orders;

var Order = require('../../../db/models/order.js');
var OrderItem = require('../../../db/models/orderItem.js');
var Product = require('../../../db/models/products.js');

///////////////////////////////////////////
//  Route: api/orders
///////////////////////////////////////////


// Returns all orders if you just ping the /orders route
orders.get('/', function(req, res, next) {
    Order.findAll()
        .then(function(allOrders) {

            if (!allOrders) {
                res.sendStatus(404);
            } else {
                res.status(200).send(allOrders);
            }
        })
        .catch(next);
});

//POST - create new order
orders.post('/', function(req, res, next) {
    Order.create(req.body)
        .then(function(orderCreated) {
            res.status(201).send(orderCreated);
        })
        .catch(next);
});

//Order Params
orders.param('orderId', function(req, res, next, id) {
    Order.findById(id, {
            include: [{
                model: OrderItem,
                include: [Product]
            }]
        })
        .then(function(order) {
            if (!order) {
                var err = new Error('Order does not exist.');
                err.status = 404;
                throw err;
            }
            req.order = order;
            next();
            return null;
        })
        .catch(next);
});

// ASk KATE/JOE/GEOFF

// orders.param('orderId', function(req, res, next, id) {
//     OrderItem.findAll({
//       where: {
//         orderId: id
//       }
//     })
//       .then(function(order) {
//         console.log('orderzzzzz$$$$$', order);
//           if (!order) {
//               var err = new Error('Order does not exist.');
//               err.status = 404;
//               throw err;
//           }
//           req.order = order;
//           next();
//           return null;
//       })
//       .catch(next);
// });


// POST one OrderItem
orders.post('/:orderId/orderItems', function(req, res, next) {
    // Order.findOrCreate({
    //   where: {
    //     id: req.order.orderId
    //   }
    // })
    // .then(function(results){
    //   var order = results[0];

    // req.order.addProduct(1)
    // .then(function(foundProduct){
    //   res.send(foundProduct);
    // })
    // .catch(next);


    OrderItem.create(req.body)
        .then(function(orderItem) {
            orderItem.setOrder(req.order.id);
            orderItem.setProduct(req.body.productId);
            res.status(201).send(orderItem);
        })
        .catch(next);
});


// GET all OrderItems
orders.get('/:orderId/orderItems', function(req, res, next) {
    OrderItem.findOne({
            where: {
                id: req.params.orderId
            },
            include: [Product, Order]
        })
        .then(function(foundOrderItems) {
            res.status(200).send(foundOrderItems);
        })
        .catch(next);
});


// GET one order
orders.get('/:orderId', function(req, res, next) {
    res.send(req.order);
});

//PUT One (update)
orders.put('/:orderId', function(req, res, next) {
    req.order.update(req.body)
        .then(function(order) {
            res.status(200).send(order);
        })
        .catch(next);
});

//DELETE
orders.delete('/:orderId', function(req, res, next) {
    req.order.destroy()
        .then(function() {
            res.sendStatus(204);
        })
        .catch(next);
});


////////////////////////////////////////////////////////
//  Route: api/orders/:orderId/orderItems/:orderItemId
///////////////////////////////////////////////////////

// // POST one OrderItem
// orders.post('/:orderId/orderItems', function(req, res, next){
//   req.order.findOrCreate({
//     where: {
//       id: req.order.id
//     },
//     include: [Product]
//   })
// .then(function(result){
//   console.log('resultttttttttyooo:');
//   var foundOrderItem = result[0];
//   res.status(201).send(foundOrderItem);
// })
// .catch(next);
// });


// // GET all OrderItems
// orders.get('/:orderId/orderItems', function(req, res, next){
//   req.order.findAll({})
//   .then(function(foundOrderItems){
//     res.status(200).send(foundOrderItems);
//   })
//   .catch(next);
// });


// OrderItem Param

// GET one OrderItem

// PUT - update one OrderItem

// DElETE one OrderItem
