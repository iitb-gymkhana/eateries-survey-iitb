var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment-timezone');

var canteensSurveySchema = new Schema({
    name: [{id: Number, value: String}],
    phoneNumber: [{id: Number, value: Number}],
    email: [{id: Number, value: String}],
    hostel: [{id: Number, value: Number}],
    frequency: [{id: Number, value: Number}],
    teaCoffee: [{id: Number, value: Number}],
    milkshakes: [{id: Number, value: Number}],
    juice: [{id: Number, value: Number}],
    paratha: [{id: Number, value: Number}],
    franky: [{id: Number, value: Number}] ,
    eggItems: [{id: Number, value: Number}],
    riceAndNoodles: [{id: Number, value: Number}],
    rice: [{id: Number, value: Number}],
    dryChickenAndPaneer: [{id: Number, value: Number}],
    sandwich: [{id: Number, value: Number}],
    dryBhaji: [{id: Number, value: Number}],
    vegAndPaneerGravy: [{id: Number, value: Number}],
    nonVeg: [{id: Number, value: Number}],
    dal: [{id: Number, value: Number}],
    maggi: [{id: Number, value: Number}],
    soups: [{id: Number, value: Number}],
    dosa: [{id: Number, value: Number}],
    extras: [{id: Number, value: Number}],
    hygieneOfItems: [{id: Number, value: Number}],
    absenceMenuItemTimes: [{id: Number, value: Number}],
    otherParameters: [{id: Number, value: Number}],
    otherSuggestions: [{id: Number, value: String}],
    submittedOn: [{id: Number, value: Date}]
});

canteensSurveySchema.pre('save', function(next) {
    this.submittedOn = [{id: 0, value: moment()}]
    next()
});

module.exports = mongoose.model('CanteensSurvey', canteensSurveySchema);