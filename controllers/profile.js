var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/ppConfig');
var router = express.Router();

router.post('/:id', function(req, res) {
  db.favorite.create({
    userId: req.user.id,
    restaurantId: req.body.restaurantId,
    restaurantName: req.body.restaurantName,
    restaurantUrl: req.body.restaurantUrl
  }).then(function(favorite) {
    res.redirect('/profile');
  });
});

router.get('/', isLoggedIn, function(req, res) {
  db.favorite.findAll({
    where: {
      userId: req.user.id
    }
    }).then(function(favorite) {
      // console.log('$$$$', favorite);
      // res.send('hi');
      res.render('profile.ejs', { favorite: favorite });
    });
  });


router.post('/delete/:id', function(req, res) {
  // console.log('$$$$ ', req.user.id, req.body.restaurantId, req.body.restaurantName, req.body.restaurantUrl);
  db.favorite.destroy({
    where: {
      userId: req.user.id,
      restaurantId: req.body.restaurantId,
      restaurantName: req.body.restaurantName,
      restaurantUrl: req.body.restaurantUrl
  }
}).then(function(noFavorite) {
    console.log('no favorite ', noFavorite);
    res.redirect('/profile');
  })
})

module.exports = router;
