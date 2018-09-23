var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var aromasSurveySchema = new Schema({
    name: [{id: Number, value: String}],
    phoneNumber: [{id: Number, value: Number}],
    email: [{id: Number, value: String}],
    frequency: [{id: Number, value: String}],
    breakfastItems: [{id: Number, value: String}],
    appetizersItems: [{id: Number, value: String}],
    biryaniVegItems: [{id: Number, value: String}],
    biryaniNonVegItems: [{id: Number, value: String}],
    tandoorItems: [{id: Number, value: String}],
    vegSpecialDishesItems: [{id: Number, value: String}],
    paneerSpecialDishesItems: [{id: Number, value: String}],
    chickenSpecialDishesItems: [{id: Number, value: String}],
    fishDishesItems: [{id: Number, value: String}],
    vegRiceAndNoodlesItems: [{id: Number, value: String}],
    nonVegRiceAndNoodlesItems: [{id: Number, value: String}],
    breadBasketItems: [{id: Number, value: String}],
    beveragesAndJuicesItems: [{id: Number, value: String}],
    dessertItems: [{id: Number, value: String}],
    hygieneOfItems: [{id: Number, value: String}],
    absenceMenuItemTimes: [{id: Number, value: String}],
    otherParameters: [{id: Number, value: String}],
    otherSuggestions: [{id: Number, value: String}],
    submittedOn: [{id: Number, value: Date}]
});

aromasSurveySchema.pre('save', function(next) {
    this.submittedOn = [{id: 0, value: moment()}]
    next();
});

module.exports = mongoose.model('AromasSurvey', aromasSurveySchema);