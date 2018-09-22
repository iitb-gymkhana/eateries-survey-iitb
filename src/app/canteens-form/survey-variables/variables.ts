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

const noIdeaRating = ratingOptions.length - 1;
const foodItems = [
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
    { id: 18, value: noIdeaRating }
];
assertEqualLength(foodItems, 'foodItems');

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
    foodItems,
    hygieneOfItems,
    absenceMenuItemTimes,
    absenceMenuItemTimesOptions,
    otherParameters,
    otherSuggestions
};
