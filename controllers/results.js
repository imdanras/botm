var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var router = express.Router();
var request = require('request');
var Yelp = require('yelp');

// we are in /results

//Yelp keys and tokens
var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET
});

// results landing page
router.get('/', function(req, res) {
  yelp.search({
    term: 'burger',
    location: req.query.q + ' Seattle' })
  .then(function(data) {
  res.render('results.ejs', { data: data.businesses });
    // console.log(data);
    // res.send(data);
  })
  .catch(function(err) {
    console.error(err);
  });
 });




// router.delete('/profile')

module.exports = router;
