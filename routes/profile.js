var express = require('express');
var router = express.Router();
var database = require('../database');

router.post("/", function(req, res, next){
	// if (req.session.loggedin) {

	var user = req.body.uname;
	var password = req.body.psw;	
	
	console.log(user);
	var query = "SELECT * FROM users WHERE name = ? AND password = ?" ;

	database.query(query, [user,password],function(error, data){

		if(error)
		{
			throw error; 
	}
		else
		{
			res.render('profile', {title:'AGO Employees Information', action:'list', users:data, message:req.flash('success')});
		}

	});
// } else {
// req.flash('success', 'Please login first!');
// res.redirect('/userLogin');
// }
});

module.exports = router;
