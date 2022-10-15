var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('thankyou', { title: 'Absolute Global Oraganization' });
});

router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', { title: 'Absolute Global Oraganization' });
});




module.exports = router;
