var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/ppConfig');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('update.ejs');
});

router.put('/', function(req, res) {
  var emailToEdit = req.body.email;
  db.user.update({email:emailToEdit},
    {where:{
      id:req.user.id
    }}).then(function(user) {
    // user.email = emailToEdit;
    // user.save().then(function(){
      res.send({ message: 'success' });
    // });
  });
});


module.exports = router;
