var express = require('express');
var router = express.Router();
var User = require('../../../db/models/user');

module.exports = router;

router.get('/', function( req, res, next) {
  User.findAll({})
  .then(function(users){
    res.send(users);
  })
  .catch(next);
})

router.post('/', function( req, res, next) {
  User.create(req.body)
  .then(function(user){
    res.status(201)
    res.send(user)
  })
  .catch(next);
})

router.param('userId', function( req, res, next, id) {
  User.findById(id)
  .then(function(user){
    if (!user) {
      var err = Error('User not found');
      err.status = 404;
      throw err
    }
    req.user = user;
    next();
    return null;
  })
  .catch(next);
})

router.get('/:userId', function ( req, res) {
    res.send(req.user);
})

