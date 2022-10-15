var express = require('express');
var router = express.Router();
var database = require('../database');


/* GET home page. */
router.get('/', function(req, res, ) {
  res.render('login', { title: 'Absolute Global Oraganization' });
});

// router.post('/authentication', function(req, res, next) {
//   var user = req.body.uname;
//   var password = req.body.psw;
//   connection.query('SELECT * FROM admin WHERE uname = ? AND psw = ?', [user, password], function(err, rows, fields) {
//   if(err) throw err
//   // if user not found
//   if (rows.length <= 0) {
//   req.flash('error', 'Please correct enter email and Password!')
//   res.redirect('/login')
//   }
//   else { // if user found
//   // render to views/user/edit.ejs template file
//   req.session.loggedin = true;
//   res.redirect('/users');
//   }     
//   console.log(rows)       
//   })
//   })

module.exports = router;
