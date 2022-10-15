var express = require('express');
var router = express.Router();
var multer = require('multer');
var database = require('../database');


var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, "public/upload");
	},
	filename: function (req, file, cb) {
	  cb(null,Date.now() + '-' + file.originalname );
	},
  });

  var upload = multer({ storage: storage });
  var uploadMultiple = upload.fields([{ name: 'Education_certificate', maxCount: 1 }, { name: 'Pan_img', maxCount: 1 },{ name: 'Aadhar_img', maxCount: 1 }, { name: 'resume', maxCount: 1 }])
  
router.get("/", function (request, response, next) {

	response.render("register", { title: 'Insert Data into MySQL', action: 'add' });

});

router.post("/add_register", uploadMultiple, function (request, response, next) {

	var adhar = request.files.Aadhar_img;
	var adharpath = adhar.map(function(elem){ 
		return elem.filename}).join(",");
	
	var pan = request.files.Pan_img;
	var panpath = pan.map(function(elem){ 
		return elem.filename}).join(",");
	
	var Edu = request.files.Education_certificate;
	var edupath = Edu.map(function(elem){ 
		return elem.filename}).join(",");

	var resume = request.files.resume;
	var resumepath = resume.map(function(elem){ 
		return elem.filename}).join(",");

	var Date = request.body.Date;
	var Name = request.body.Name;
	var password = request.body.password;
	var Mobile_No = request.body.Mobile_No;
	var Permanent_Address = request.body.Permanent_Address;
	var Temporary_Address = request.body.Temporary_Address;
	var Education = request.body.Education;
	var Education_certificate = '/upload/' + edupath;
	var Date_Of_Birth = request.body.Date_Of_Birth;
	var Aadhar_No = request.body.Aadhar_No;
	var Aadhar_img = '/upload/' + adharpath;
	var Pan_No = request.body.Pan_No;
	var Pan_img = '/upload/' + panpath;
	var resume = '/upload/' + resumepath;
	var Emergency_Contact_No = request.body.Emergency_Contact_No;
	var Work_Experience = request.body.Work_Experience;
	var Work_details = request.body.Work_details;

	var query = `
	INSERT INTO users
	(Date, Name,password,Mobile_No, Permanent_Address, Temporary_Address, Education,Education_certificate, Date_Of_Birth, Aadhar_No,Aadhar_img,Pan_no, Pan_img,resume,Emergency_Contact_No, Work_Experience,Work_details)
	VALUES ("${Date}", "${Name}", "${password}", "${Mobile_No}", "${Permanent_Address}", "${Temporary_Address}","${Education}","${Education_certificate}", "${Date_Of_Birth}", "${Aadhar_No}", "${Aadhar_img}","${Pan_No}","${Pan_img}","${resume}","${Emergency_Contact_No}","${Work_Experience}","${Work_details}")
	`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		}
		else {
			request.flash('success', 'user data Inserted');
			response.redirect("/thankyou");
		}

	});
	

});




module.exports = router;