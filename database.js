const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'mydb',
	user : 'root',
	password : ''
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
  });
  

module.exports = connection;