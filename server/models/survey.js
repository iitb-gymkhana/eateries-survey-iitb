var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var surveySchema = new Schema({
    email: String,
    hostel: String,
    frequency: String,
    foodItems: [{item: String, rating: String}],
    hygieneOfItems: [{hygieneOf: String, level: String}],
    absenceMenuItemTimes: String,
    otherParameters: [{parameter: String, rating: String}],
    otherSuggestions: String,
    submitted_on: Date
});

surveySchema.pre('save', function(next) {
    this.submitted_on = new Date();

    next();
});

module.exports = mongoose.model('Survey', surveySchema);