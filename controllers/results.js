var express = require('express');
var db = require('../models');
var router = express.Router();
var request = require('request');
var Yelp = require('yelp');

// we are in /results

//Yelp keys and tokens
var yelp = new Yelp({
  consumer_key: '0xWH50LFY6Yif_OOd7uDXQ',
  consumer_secret: 'u65vgNYAOJa0rFD0DZEtg2Su1W8',
  token: 'SUb5Caxvwzk2aHb5DuVlonaCJxrDfXCB',
  token_secret: 'm8yX5cFDbuMwlfqydZ135DSa7e0'
});


router.get('/', function(req, res) {
  yelp.search({ term: 'burger', location: req.query.q })
  .then(function (data) {
    // var body = JSON.parse(data);
    console.log(data);
    // res.send('hi');
  })
  .catch(function (err) {
    console.error(err);
  });
  res.render('results.ejs');
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
