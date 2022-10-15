var express = require('express');
var router = express.Router();
var connection  = require('../database');

/* GET home page. */
router.get('/', function(req, res, ) {
  res.render('pageNotFound', { title: 'Absolute Global Oraganization' });
});


module.exports = router;
