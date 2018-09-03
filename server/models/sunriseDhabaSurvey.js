var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var sunriseDhabaSurveySchema = new Schema({
    name: String,
    phoneNumber: Number,
    email: String,
    frequency: String,
    breakfastItems: [{itemId: String, rating: String}],
    appetizersItems: [{itemId: String, rating: String}],
    biryaniVegItems: [{itemId: String, rating: String}],
    biryaniNonVegItems: [{itemId: String, rating: String}],
    tandoorItems: [{itemId: String, rating: String}],
    vegSpecialDishesItems: [{itemId: String, rating: String}],
    paneerSpecialDishesItems: [{itemId: String, rating: String}],
    chickenSpecialDishesItems: [{itemId: String, rating: String}],
    fishDishesItems: [{itemId: String, rating: String}],
    vegRiceAndNoodlesItems: [{itemId: String, rating: String}],
    nonVegRiceAndNoodlesItems: [{itemId: String, rating: String}],
    breadBasketItems: [{itemId: String, rating: String}],
    beveragesAndJuicesItems: [{itemId: String, rating: String}],
    dessertItems: [{itemId: String, rating: String}],
    hygieneOfItems: [{itemId: String, level: String}],
    absenceMenuItemTimes: String,
    otherParameters: [{parameterId: String, rating: String}],
    otherSuggestions: String,
    submittedOn: Date
});

sunriseDhabaSurveySchema.pre('save', function(next) {
    this.submittedOn = moment(new Date());
    next();
});

module.exports = mongoose.model('SunriseDhabaSurvey', sunriseDhabaSurveySchema);