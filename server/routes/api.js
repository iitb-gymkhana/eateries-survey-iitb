var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Survey = require('../models/survey');
require("dotenv").config();

var host = process.env.DB_HOST;
var username = process.env.DB_USER;
var password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb://${username}:${password}@${host}/hostels`);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', function() {
  console.log('Successfully connected')
});

router.post('/submit', function(req, res, next) {
  Survey.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
