var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var surveySchema = new Schema({
    name: [{id: Number, value: String}],
    phoneNumber: [{id: Number, value: Number}],
    email: [{id: Number, value: String}],
    hostel: [{id: Number, value: Number}],
    frequency: [{id: Number, value: Number}],
    foodItems: [{id: Number, value: Number}],
    hygieneOfItems: [{id: Number, value: Number}],
    absenceMenuItemTimes: [{id: Number, value: Number}],
    otherParameters: [{id: Number, value: Number}],
    otherSuggestions: [{id: Number, value: String}],
    submittedOn: Date
});

surveySchema.pre('save', function(next) {
    this.submittedOn = moment(new Date());
    next();
});

module.exports = mongoose.model('Survey', surveySchema);