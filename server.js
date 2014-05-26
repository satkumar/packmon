/*
 * packmon
 * https://github.com/satkumar/packmon
 *
 * Copyright (c) 2014 Sathiish Kumar
 * Licensed under the MIT license.
 */
var express  = require('express');
var uuid = require('node-uuid');
var app      = express();
var packmon = require(__dirname + '/lib/packmon.js');

app.configure(function() {
		app.use(express.static(__dirname + '/lib'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
	});

app.listen(3000);
console.log("App listening on port 3000");


/******** FRONT-END ********/
app.get('/packet-capture/*', function(req, res) {
		res.sendfile(__dirname + '/lib/packet-capture.html');
});

app.get('*',function(req,res){
    res.sendfile(__dirname + '/lib/start-capture.html');
});


/******** REST-API Backend *******/
app.post('/api/capture', function(req, res) {
    packmon.listen(req.body.inteface,req.body.filter,function(){
      res.render('packet-capture/'+ uuid.v1());
    });
});
