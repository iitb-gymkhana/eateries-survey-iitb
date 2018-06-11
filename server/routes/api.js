var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Survey = require('../models/survey');
var moment = require('moment-timezone');
var fs = require('fs');
var path = require('path');

require("dotenv").config();

var host = process.env.DB_HOST;
var username = process.env.DB_USER;
var password = process.env.DB_PASSWORD;

const TZ = 'Asia/Kolkata';

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

router.get('/csv', function(req, res, next) {
  Survey.find({}, function(err, data) {
    if (err) next(err);
    // console.log(data);

    var i;
    var csvData = {
      'email': [],
      'hostel': [],
      'frequency': [],
      'absenceMenuItemTimes': [],
      'otherSuggestions': [],
      'submittedOn': []
    }

    for (i = 0; i < data.length; i++) {
      var d = data[i];
      csvData['email'].push(d['email']);
      csvData['hostel'].push(d['hostel']);
      csvData['frequency'].push(d['frequency']);
      csvData['absenceMenuItemTimes'].push(d['absenceMenuItemTimes']);
      csvData['otherSuggestions'].push(d['otherSuggestions']);

      var j;
      for (j = 0; j < d['foodItems'].length; j++) {
        var item = d['foodItems'][j];

        if (!(item.name in csvData)) csvData[item.name] = [];
        csvData[item.name].push(item.rating);
      }

      for (j = 0; j < d['hygieneOfItems'].length; j++) {
        var item = d['hygieneOfItems'][j];

        if (!(item.hygieneOf in csvData)) csvData[item.hygieneOf] = [];
        csvData[item.hygieneOf].push(item.level);
      }

      for (j = 0; j < d['otherParameters'].length; j++) {
        var p = d['otherParameters'][j];

        if (!(p.parameter in csvData)) csvData[p.parameter] = [];
        csvData[p.parameter].push(p.rating);
      }
      
      csvData['submittedOn'].push(moment(d['submittedOn']).tz(TZ).format());
    }

    fields = Object.keys(csvData);
    var csvArrays = []

    for (i = 0; i < fields.length; i++) {
      csvArrays.push(csvData[fields[i]])
    }

    csvArrays = csvArrays[0].map((x, i) => csvArrays.map(x => x[i]));
    csvArrays.unshift(fields);

    for (i = 0; i < csvArrays.length; i++) {
      csvArrays[i] = '"' + csvArrays[i].join('","') + '"';
    }
    csvData = csvArrays.join('\n');

    fs.writeFile('./public/eateries_survey_data.csv', csvData, function(err) {
      if (err) return console.log(err);
    })

    res.setHeader('Content-disposition', 'attachment; filename=eateries_survey_data.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csvData);
  });

});

module.exports = router;
