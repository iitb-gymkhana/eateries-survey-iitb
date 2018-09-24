var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var brewandbitesSurveySchema = new Schema({
  name: [{id: Number, value: String}],
  phoneNumber: [{id: Number, value: Number}],
  email: [{id: Number, value: String}],
  frequency: [{id: Number, value: Number}],
  vegStarters: [{id: Number, value: Number}],
  nonVegStarters: [{id: Number, value: Number}],
  regularCoffee: [{id: Number, value: Number}],
  blackCoffee: [{id: Number, value: Number}],
  milkshakes: [{id: Number, value: Number}],
  sundaes: [{id: Number, value: Number}],
  nonVegPizzas: [{id: Number, value: Number}],
  vegPizzas: [{id: Number, value: Number}],
  sandwiches: [{id: Number, value: Number}],
  paninis: [{id: Number, value: Number}],
  wraps: [{id: Number, value: Number}],
  pastas: [{id: Number, value: Number}],
  burgers: [{id: Number, value: Number}],
  extraToppingsOrDips: [{id: Number, value: Number}],
  regularTea: [{id: Number, value: Number}],
  greenTea: [{id: Number, value: Number}],
  infusionTea: [{id: Number, value: Number}],
  mojito: [{id: Number, value: Number}],
  slush: [{id: Number, value: Number}],
  iceTea: [{id: Number, value: Number}],
  frappe: [{id: Number, value: Number}],
  brewtastic: [{id: Number, value: Number}],
  onTheRocks: [{id: Number, value: Number}],
  hygieneOfItems: [{id: Number, value: Number}],
  absenceMenuItemTimes: [{id: Number, value: Number}],
  otherParameters: [{id: Number, value: Number}],
  otherSuggestions: [{id: Number, value: String}],
  submittedOn: [{id: Number, value: Date}]
});

brewandbitesSurveySchema.pre('save', function(next) {
    this.submittedOn = [{id: 0, value: moment()}]
    next()
});

module.exports = mongoose.model('BrewandbitesSurvey', brewandbitesSurveySchema);