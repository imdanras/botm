var express = require('express');
var db = require('../models');
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
    location: req.params.hiddenInput || req.query.q })
  .then(function (data) {
  res.render('results.ejs', { data: data.businesses });
    // console.log(data);
    // res.send(data);
  })
  .catch(function (err) {
    console.error(err);
  });
 })


// router.get('/', function(req, res) {
//   console.log(req.params)
//   request({
//     url: 'https://api.yelp.com/v2/search/?term=burger&location=' + req.params.location + '&actionlinks=true&category_filter=burgers',
//     qs: {
//       s: req.query.q
//     }
//   }, function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//       var data = JSON.parse(body);
//       console.log(data);
//       res.render('results.ejs', { results: data.businesses });
//     } else {
//       res.send('bad request')
//     }
//   });
// });


module.exports = router;
