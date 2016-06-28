var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();


router.post('/:id', function(req, res) {
  // console.log('userId is ', req.user.id);
  console.log('restaurantId is ', req.body.restaurantId);
  db.favorite.create({
    userId: req.user.id,
    restaurantId: req.body.restaurantId,
    restaurantName: req.body.restaurantName,
    restaurantUrl: req.body.restaurantUrl
  }).then(function(favorite) {
    // res.send(favorite);
    console.log('restaurantName ', req.body.restaurantName);
    res.render('profile.ejs', { favorite: favorite });
  });
});

router.get('/:id/delete', function(req, res) {
  db.favorite.destroy({
    userId: req.user.id
  })
})

module.exports = router;
