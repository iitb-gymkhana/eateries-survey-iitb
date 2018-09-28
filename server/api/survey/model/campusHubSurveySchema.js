var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var campusHubSurveySchema = new Schema({
  name: [{id: Number, value: String}],
  phoneNumber: [{id: Number, value: Number}],
  email: [{id: Number, value: String}],
  frequency: [{id: Number, value: Number}],
  frequency: [{id: Number, value: Number}],
  regularFruitJuice: [{id: Number, value: Number}],
  mixedFruitJuice: [{id: Number, value: Number}],
  iceCreamShakes: [{id: Number, value: Number}],
  milkShakes: [{id: Number, value: Number}],
  fruitMilkShakes: [{id: Number, value: Number}],
  desserts: [{id: Number, value: Number}],
  iceCreamFlavours: [{id: Number, value: Number}],
  hotBeverages: [{id: Number, value: Number}],
  coldBeverages: [{id: Number, value: Number}],
  quickBites: [{id: Number, value: Number}],
  miniMeals: [{id: Number, value: Number}],
  paranthas: [{id: Number, value: Number}],
  riceMeals: [{id: Number, value: Number}],
  maggi: [{id: Number, value: Number}],
  chaat: [{id: Number, value: Number}],
  chinese: [{id: Number, value: Number}],
  extras: [{id: Number, value: Number}],
  sandwich: [{id: Number, value: Number}],
  frankie: [{id: Number, value: Number}],
  hygieneOfItems: [{id: Number, value: Number}],
  absenceMenuItemTimes: [{id: Number, value: Number}],
  otherParameters: [{id: Number, value: Number}],
  otherSuggestions: [{id: Number, value: String}],
  submittedOn: [{id: Number, value: Date}]
});

campusHubSurveySchema.pre('save', function(next) {
    this.submittedOn = [{id: 0, value: moment()}]
    next()
});

module.exports = mongoose.model('CampusHubSurvey', campusHubSurveySchema);