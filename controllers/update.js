var express = require('express');
var db = require('../models');
var isLoggedIn = require('../middleware/isLoggedIn');
var passport = require('../config/ppConfig');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('update.ejs');
});

router.put('/:id', function(req, res) {
  var userToEdit = req.params.id;

  // Edit team here

  /*
   * instead of rendering a page, send back JSON or text, which can be read
   * in the .done() promise of the AJAX call
   */
  res.send({message: 'success'});
});


module.exports = router;
