var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var surveySchema = new Schema({
    email: String,
    hostel: String,
    frequency: String,
    foodItems: [{name: String, rating: String}],
    hygieneOfItems: [{hygieneOf: String, level: String}],
    absenceMenuItemTimes: String,
    otherParameters: [{parameter: String, rating: String}],
    otherSuggestions: String,
    submittedOn: Date
});

surveySchema.pre('save', function(next) {
    this.submittedOn = moment(new Date());
    next();
});

console.log(moment(new Date()).tz('Asia/Kolkata').format());
console.log(new Date());
module.exports = mongoose.model('Survey', surveySchema);