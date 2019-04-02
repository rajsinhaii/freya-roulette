"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var strftime = require('strftime');


router.get('/', function(req, res) {
      res.render('wheel')
});

module.exports = router;
