var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Survey = require('../models/survey');
var SunriseDhabaSurvey = require('../models/sunriseDhabaSurvey');
var moment = require('moment-timezone');
var fs = require('fs');
var path = require('path');
var surveyOptionsMapping = require('./survey-variables.mapping');

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

function getSurveyDict(data) {
  var i, j;

  var dict = {
    'name': [],
    'phoneNumber': [],
    'email': [],
    'hostel': [],
    'frequency': [],
    'absenceMenuItemTimes': [],
    // 'otherSuggestions': [],
    // 'submittedOn': []
  }

  if (data.length === 0) dict = {};

  for (i = 0; i < data.length; i++) {
    var d = data[i];
    dict['name'].push(d['name']);
    dict['phoneNumber'].push(d['phoneNumber']);
    dict['email'].push(d['email']);
    dict['hostel'].push(surveyOptionsMapping['hostels'][d['hostel']]);
    dict['frequency'].push(surveyOptionsMapping['frequencies'][d['frequency']]);
    dict['absenceMenuItemTimes'].push(surveyOptionsMapping['absenceMenuItemTimes'][d['absenceMenuItemTimes']]);
    // dict['otherSuggestions'].push(d['otherSuggestions']);

    for (j = 0; j < d['foodItems'].length; j++) {
      var item = d['foodItems'][j];

      var name = surveyOptionsMapping['foodItems'][item.itemId];
      
      if (!(name in dict)) dict[name] = [];
      dict[name].push(surveyOptionsMapping['ratings'][item.rating]);
    }

    for (j = 0; j < d['hygieneOfItems'].length; j++) {
      var item = d['hygieneOfItems'][j];
      var name = surveyOptionsMapping['hygieneOfItems'][item.itemId];

      if (!(name in dict)) dict[name] = [];
      dict[name].push(surveyOptionsMapping['ratings'][item.level]);
    }

    for (j = 0; j < d['otherParameters'].length; j++) {
      var p = d['otherParameters'][j];
      var parameter = surveyOptionsMapping['otherParameters'][p.parameterId]

      if (!(parameter in dict)) dict[parameter] = [];
      dict[parameter].push(surveyOptionsMapping['ratings'][p.rating]);
    }
    
    // dict['submittedOn'].push(moment(d['submittedOn']).tz(TZ).format());
  }

  return dict;

}

router.post('/canteens/submit', function(req, res, next) {
  Survey.create(req.body, function (err, post) {
    if (err) {
      res.json({'status': 'failed'})
      return next(err);
    } else {
      res.json({'status': 'successful'});
    }
  });
});

router.post('/sunrisedhaba/submit', function(req, res, next) {
  SunriseDhabaSurvey.create(req.body, function (err, post) {
    if (err) {
      res.json({'status': 'failed'})
      return next(err);
    } else {
      res.json({'status': 'successful'});
    }
  });
});

router.get('/hostel/:number', function(req, res, next) {
  Survey.find({'hostel': req.params.number}, '-_id', function(err, data) {
    if (err) next(err);
    res.json(getSurveyDict(data));
  });
});

router.get('/csv', function(req, res, next) {
  Survey.find({}, function(err, data) {
    if (err) next(err);
    // console.log(data);

    csvDict = getSurveyDict(data);

    fields = Object.keys(csvDict);
    var csvArrays = []

    for (i = 0; i < fields.length; i++) {
      csvArrays.push(csvDict[fields[i]])
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
