var express = require('express');
var router = express.Router();
var database = require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('registerform', { title: 'Absolute Global Oraganization' });
});

router.get('/registerform', function(req, res, next) {
  res.render('registerform', { title: 'Absolute Global Oraganization' });
});

router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM users WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('registerform', {title: 'Edit MySQL Table Data', action:'list', users:data});
        
	});

});

router.post('/edit/:id', function(request, response, next){

	var id = request.params.id;
	// var adhar = JSON.stringify(request.files.Aadhar_img);
	// console.log(adhar);
	// var pan = '/upload/' + request.files.Pan_img;
	// var Education = '/upload/' + request.files.Education_certificate;
	// var resume = '/upload/' + request.files.resume;
	var Date = request.body.Date;
	var Name = request.body.Name;
	var password = request.body.password;
	var Mobile_No = request.body.Mobile_No;
	var Permanent_Address = request.body.Permanent_Address;
	var Temporary_Address = request.body.Temporary_Address;
	var Education = request.body.Education;
	// var Education_certificate = Education;
	var Date_Of_Birth = request.body.Date_Of_Birth;
	var Aadhar_No = request.body.Aadhar_No;
	// var Aadhar_img = '/upload/' + "adhar";
	// var Pan_No = request.body.Pan_No;
	// var Pan_img = pan;
	// var resume = resume;
	var Emergency_Contact_No = request.body.Emergency_Contact_No;
	var Work_Experience = request.body.Work_Experience;
	var Work_details = request.body.Work_details;


	var query = `
	UPDATE users 
	SET Date = "${Date}", 
	Name = "${Name}", 
	password = "${password}", 
	Mobile_No = "${Mobile_No}" ,
	Permanent_Address = "${Permanent_Address}", 
	Temporary_Address = "${Temporary_Address}", 
	Education = "${Education}" ,
	Date_Of_Birth = "${Date_Of_Birth}", 
	Aadhar_No = "${Aadhar_No}" ,
	Emergency_Contact_No = "${Emergency_Contact_No}", 
	Work_Experience = "${Work_Experience}" ,
	Work_details = "${Work_details}" 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'user Data Updated');
			response.redirect('/thankyou');
		}

	});

});




module.exports = router;
