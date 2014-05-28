/*
 * packmon
 * https://github.com/satkumar/packmon
 *
 * Copyright (c) 2014 Sathiish Kumar
 * Licensed under the MIT license.
 */
var express  = require('express');
var app      = express();

app.configure(function() {
		app.use(express.static(__dirname + '/public'));
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
    // app.engine('html', require('ejs').renderFile);
    // app.set('view engine','html');
});

var port = process.env.PORT || 3000;
require(__dirname + '/app/routes')(app); // configure our routes

app.listen(port);
console.log('Starting packmon on ' + port);
exports = module.exports = app;
