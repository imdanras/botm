var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/ppConfig');
var router = express.Router();

router.post('/:id', isLoggedIn, function(req, res) {
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
  }).then(function(favorites) {
      // console.log('$$$$', favorite);
      // res.send('hi');
      console.log('favorites: ', favorites);
    res.render('profile.ejs', { favorites: favorites });
  });
});


router.delete('/delete/:id', function(req, res) {
  console.log('/delete/:id route hit');
  db.user.findOne({
    where: {
      id: req.user.id
    }
  }).then(function(user) {
    console.log('delete returned');
    console.log(req.params.id);
    user.removeFavorite(req.params.id).then(function() {
      console.log('removed favorite');
      res.send({ message: 'hooray' });
    });
  });
});

// router.post('/delete/:id', function(req, res) {
//   db.favorite.destroy({
//     where: {
//       userId: req.user.id,
//       restaurantId: req.body.restaurantId,
//       restaurantName: req.body.restaurantName,
//       restaurantUrl: req.body.restaurantUrl
//     }
//   }).then(function(noFavorite) {
//     console.log('no favorite ', noFavorite);
//     res.redirect('/profile');
//   });
// });

module.exports = router;
