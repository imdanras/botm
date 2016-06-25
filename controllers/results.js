var express = require('express');
var db = require('../models');
var router = express.Router();




router.get('/:location', function(req, res) {
  request({
    url: 'https://api.yelp.com/v2/search/?term=burger&location=' + req.params.location + '&actionlinks=true&category_filter=burgers',
    qs: {
      s: req.query.q
    }
  }, function(error, response, body) {
    if (!error && response.statusCode === 200 && body[2] !== '<') {
      var data = JSON.parse(body);
      res.render('results.ejs', { results: data.Search });
    }
  });
});

module.exports = router;
