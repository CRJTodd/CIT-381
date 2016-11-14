var mysql = require('mysql');
var dbInfo = require('./dbInfo.js');
var express = require('express');
var http = require("http");
var app = express();

http.createServer(app).listen(3000);

app.get(express.static(__dirname + "/Public"));

app.get('/', function (req, res){
	res.send("hello from express");
});

var connection = mysql.createConnection({
    host: dbInfo.dbHost,
    port: dbInfo.dbPort,
    user: dbInfo.dbUser,
    password: dbInfo.dbPassword,
    database: dbInfo.dbDatabase
});

connection.connect(function(err)
	console.log('Connecting...\n');
	if(err) console.log(err);
	console.log('Connected to the database...\n');
});

app.get('/colors/', function (req, res){
	console.log('Route /colors GET');
	var sql = "SELECT * FROM COLOR ORDER BY COLOR_ID";
	connection.query(sql, function (errQuery, rows) {
		if(errQuery){
			console.log(errQuery);
			res.json({rows: [], err: errQuery});
		}
		else if(rows){
			console.log("Colors were returned...\n");
			res.json({rows: rows, err: ""});
		}
		else {
			console.log("No colors... \n");
			res.json({rows: [], err: ""});
		}
	});
});