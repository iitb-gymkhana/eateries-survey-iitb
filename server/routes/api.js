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
  var mappingFunc = {
    name: {
      id: (x) => 'name',
      value: (x) => x 
    },
    phoneNumber: {
      id: (x) => 'phoneNumber',
      value: (x) => x 
    },
    email: {
      id: (x) => 'email',
      value: (x) => x 
    },
    hostel: {
      id: (x) => 'hostel',
      value: (x) => {
        return surveyOptionsMapping['hostels'][x]
      } 
    },
    frequency: {
      id: (x) => 'frequency',
      value: (x) => {
        return surveyOptionsMapping['frequencies'][x]
      }
    },
    foodItems: {
      id: (x) => {
        return surveyOptionsMapping['foodItems'][x]
      },
      value: (x) => {
        return surveyOptionsMapping['ratings'][x]
      }
    },
    hygieneOfItems: {
      id: (x) => {
        return surveyOptionsMapping['hygieneOfItems'][x]
      },
      value: (x) => {
        return surveyOptionsMapping['ratings'][x]
      }
    },
    absenceMenuItemTimes: {
      id: (x) => 'absenceMenuItemTimes',
      value: (x) => {
        return surveyOptionsMapping['absenceMenuItemTimes'][x]
      }
    },
    otherParameters: {
      id: (x) => {
        return surveyOptionsMapping['otherParameters'][x]
      },
      value: (x) => {
        return surveyOptionsMapping['ratings'][x]
      }
    },
    otherSuggestions: {
      id: (x) => 'otherSuggestions',
      value: (x) => x
    },
  }

  const keys = Object.keys(mappingFunc);
  var dict = { }
  var i, j, k

  for (i = 0; i < data.length; i++) {
    const d = data[i]

    for (j = 0; j < keys.length; j++) {
      const key = keys[j]

      for (k = 0; k < d[key].length; k++) {
        const id = d[key][k]['id']
        const value = d[key][k]['value']

        const _key = mappingFunc[key].id(id) 
        if (!(_key in dict)) {
          dict[_key] = []
        }
        dict[_key].push(mappingFunc[key].value(value))
      }  
    }
  }
  
  return dict;

}

router.post('/canteens/submit', function(req, res, next) {
  Survey.create(req.body, function (err, post) {
    if (err) {
      // res.json({'status': 'failed'})
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
  Survey.find({'hostel.value': req.params.number}, '-_id', function(err, data) {
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
