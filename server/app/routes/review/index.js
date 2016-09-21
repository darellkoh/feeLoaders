'use strict';
var express = require('express');
var router = express.Router();
module.exports = router;

var Review = require('../../../db/models/reviews');


// GET all reviews
router.get('/', function(req, res, next) {
    Review.findAll({})
        .then(function(reviews) {
            res.send(reviews)
        })
        .catch(next);
});


// POST a review
router.post('/', function(req, res, next) {
    req.body.user.id = req.user.id;
    Review.create(req.body)
        .then(function(review) {
            res.status(201).send(review);
        })
        .catch(next);
});


// Review Param
router.param('reviewId', function(req, res, next, id) {
    Review.findById(id)
        .then(function(review) {
            if (!review) {
                var err = Error('Review not found.');
                err.status = 404;
                throw (err);
            }
            req.review = review;
            next();
            return null;
        })
        .catch(next);
});


// GET one review
router.get('/:reviewId', function(req, res, next) {
    res.send(req.review);
});


// PUT - updating a review
router.put('/:reviewId', function(req, res, next) {
    req.review.update(req.body)
        .then(function(updatedReview) {
            res.status(200).send(updatedReview);
        })
        .catch(next);
});


// DELETE a review
router.delete('/:reviewId', function(req, res, next) {
    req.review.destroy()
        .then(function() {
            res.status(204).end();
        })
        .catch(next);
});
