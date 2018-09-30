import { surveyOptionsMappings } from './mapping';

function assertEqualLength(arr, option) {
    if (arr.length !== Object.keys(surveyOptionsMappings[option]).length) {
        console.error(`Few '${option}' options missing`);
    }
}

const name = [
    { id: 0, value: '' }
];

const email = [
    { id: 0, value: '' }
];

const ratingOptions = [0, 1, 2, 3, 4, 5];
assertEqualLength(ratingOptions, 'ratings');

const hostel = [
    { id: 0, value: '' }
];
const hostelOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
assertEqualLength(hostelOptions, 'hostels');

const phoneNumber = [
    { id: 0, value: '' }
];

const frequency = [
    { id: 0, value: '' }
];
const frequencyOptions = [0, 1, 2, 3];
// assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = (ratingOptions.length - 1).toString();

const teaCoffee = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating }
];
assertEqualLength(teaCoffee, 'teaCoffee');

const milkshakes = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating }
];
assertEqualLength(milkshakes, 'milkshakes');

const juice = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating }
];
assertEqualLength(juice, 'juice');

const paratha = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating }
];
assertEqualLength(paratha, 'paratha');

const franky = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating },
    { id: 15, value: noIdeaRating },
    { id: 16, value: noIdeaRating },
    { id: 17, value: noIdeaRating },
    { id: 18, value: noIdeaRating },
    { id: 19, value: noIdeaRating }
];
assertEqualLength(franky, 'franky');

const eggItems = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating }
];
assertEqualLength(eggItems, 'eggItems');

const riceAndNoodles = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating },
    { id: 15, value: noIdeaRating },
    { id: 16, value: noIdeaRating },
    { id: 17, value: noIdeaRating },
    { id: 18, value: noIdeaRating },
    { id: 19, value: noIdeaRating },
    { id: 20, value: noIdeaRating },
    { id: 21, value: noIdeaRating },
    { id: 22, value: noIdeaRating },
    { id: 23, value: noIdeaRating },
    { id: 24, value: noIdeaRating }
];
assertEqualLength(riceAndNoodles, 'riceAndNoodles');

const rice = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating },
    { id: 15, value: noIdeaRating },
    { id: 16, value: noIdeaRating },
    { id: 17, value: noIdeaRating },
    { id: 18, value: noIdeaRating },
    { id: 19, value: noIdeaRating }
];
assertEqualLength(rice, 'rice');

const dryChickenAndPaneer = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating }
];
assertEqualLength(dryChickenAndPaneer, 'dryChickenAndPaneer');

const sandwich = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating },
    { id: 15, value: noIdeaRating },
    { id: 16, value: noIdeaRating },
    { id: 17, value: noIdeaRating }
];
assertEqualLength(sandwich, 'sandwich');

const dryBhaji = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating }
];
assertEqualLength(dryBhaji, 'dryBhaji');

const vegAndPaneerGravy = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating }
];
assertEqualLength(vegAndPaneerGravy, 'vegAndPaneerGravy');

const nonVeg = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating }
];
assertEqualLength(nonVeg, 'nonVeg');

const dal = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating }
];
assertEqualLength(dal, 'dal');

const maggi = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating }
];
assertEqualLength(maggi, 'maggi');

const soups = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating }
];
assertEqualLength(soups, 'soups');

const dosa = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating },
    { id: 4, value: noIdeaRating },
    { id: 5, value: noIdeaRating },
    { id: 6, value: noIdeaRating },
    { id: 7, value: noIdeaRating },
    { id: 8, value: noIdeaRating },
    { id: 9, value: noIdeaRating },
    { id: 10, value: noIdeaRating },
    { id: 11, value: noIdeaRating },
    { id: 12, value: noIdeaRating },
    { id: 13, value: noIdeaRating },
    { id: 14, value: noIdeaRating },
    { id: 15, value: noIdeaRating },
    { id: 16, value: noIdeaRating },
    { id: 17, value: noIdeaRating },
    { id: 18, value: noIdeaRating },
    { id: 19, value: noIdeaRating },
    { id: 20, value: noIdeaRating },
    { id: 21, value: noIdeaRating },
    { id: 22, value: noIdeaRating },
    { id: 23, value: noIdeaRating },
    { id: 24, value: noIdeaRating },
    { id: 25, value: noIdeaRating },
    { id: 26, value: noIdeaRating },
    { id: 27, value: noIdeaRating },
    { id: 28, value: noIdeaRating },
    { id: 29, value: noIdeaRating },
    { id: 30, value: noIdeaRating },
    { id: 31, value: noIdeaRating }
];
assertEqualLength(dosa, 'dosa');

const extras = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating }
];
assertEqualLength(extras, 'extras');

const hygieneOfItems = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating },
    { id: 3, value: noIdeaRating }
];
assertEqualLength(hygieneOfItems, 'hygieneOfItems');

const absenceMenuItemTimes = [
    { id: 0, value: '' }
];
const absenceMenuItemTimesOptions = [0, 1, 2];
assertEqualLength(absenceMenuItemTimesOptions, 'absenceMenuItemTimes');

const otherParameters = [
    { id: 0, value: noIdeaRating },
    { id: 1, value: noIdeaRating },
    { id: 2, value: noIdeaRating }
];
assertEqualLength(otherParameters, 'otherParameters');

const otherSuggestions = [
    { id: 0, value: '' }
];

export {
    name,
    phoneNumber,
    email,
    ratingOptions,
    hostel,
    hostelOptions,
    frequency,
    frequencyOptions,
    teaCoffee,
    milkshakes,
    juice,
    paratha,
    franky ,
    eggItems,
    riceAndNoodles,
    rice,
    dryChickenAndPaneer,
    sandwich,
    dryBhaji,
    vegAndPaneerGravy,
    nonVeg,
    dal,
    maggi,
    soups,
    dosa,
    extras,
    hygieneOfItems,
    absenceMenuItemTimes,
    absenceMenuItemTimesOptions,
    otherParameters,
    otherSuggestions
};
