"use strict";

// Express setup
var fs = require('fs');
var mustache = require('mustache');
var engines = require('consolidate');
var http = require('http');
var express = require('express');





// Initialize Express
var app = express();

// mongoose configuration


app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

var routes = require('./routes');
app.use('/', routes);

console.log('Express started. Listening on port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);
