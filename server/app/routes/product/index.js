var router = require('express').Router(); // eslint-disable-line new-cap
var db = require('../../../db/index.js');
var Product = db.model('product');
module.exports = router;

router.get('/', function(res, req, next){

  Product.findAll({})
  .then(function(products){
    res.status(200).send(products);
  })
  .catch(next);

})

router.get('/:productId', function(res, req, next){
  var productId = req.params.productId;
  Product.findById(productId)
  .then(function(product){
    // if(!product){
    //   res.sendStatus(404);
    // }
    res.status(200).send(product);
  })
  .catch(next)
})
