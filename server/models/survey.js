var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var surveySchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    hostel: String,
    frequency: String,
    foodItems: [{itemId: String, rating: String}],
    hygieneOfItems: [{itemId: String, level: String}],
    absenceMenuItemTimes: String,
    otherParameters: [{parameterId: String, rating: String}],
    otherSuggestions: String,
    submittedOn: Date
});

surveySchema.pre('save', function(next) {
    this.submittedOn = moment(new Date());
    next();
});

module.exports = mongoose.model('Survey', surveySchema);