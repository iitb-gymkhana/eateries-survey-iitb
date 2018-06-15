import { surveyOptionsMappings } from './survey-variables.mapping';

function assertEqualLength(arr, option) {
    if (arr.length !== Object.keys(surveyOptionsMappings[option]).length) {
        console.error(`Few '${option}' options missing`);
    }
}

const ratings = [0, 1, 2, 3, 4, 5];
assertEqualLength(ratings, 'ratings');

const hostels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
assertEqualLength(hostels, 'hostels');

const frequencies = [0, 1, 2, 3];
assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = ratings.length - 1;
const foodItems = [
    {itemId: 0, rating: noIdeaRating},
    {itemId: 1, rating: noIdeaRating},
    {itemId: 2, rating: noIdeaRating},
    {itemId: 3, rating: noIdeaRating},
    {itemId: 4, rating: noIdeaRating},
    {itemId: 5, rating: noIdeaRating},
    {itemId: 6, rating: noIdeaRating},
    {itemId: 7, rating: noIdeaRating},
    {itemId: 8, rating: noIdeaRating},
    {itemId: 9, rating: noIdeaRating},
    {itemId: 10, rating: noIdeaRating},
    {itemId: 11, rating: noIdeaRating},
    {itemId: 12, rating: noIdeaRating},
    {itemId: 13, rating: noIdeaRating},
    {itemId: 14, rating: noIdeaRating},
    {itemId: 15, rating: noIdeaRating},
    {itemId: 16, rating: noIdeaRating},
    {itemId: 17, rating: noIdeaRating},
    {itemId: 18, rating: noIdeaRating}
];
assertEqualLength(foodItems, 'foodItems');

const hygieneOfItems = [
    {itemId: 0, level: noIdeaRating},
    {itemId: 1, level: noIdeaRating},
    {itemId: 2, level: noIdeaRating},
    {itemId: 3, level: noIdeaRating}
];
assertEqualLength(hygieneOfItems, 'hygieneOfItems');

const absenceMenuItemTimes = [0, 1, 2];
assertEqualLength(absenceMenuItemTimes, 'absenceMenuItemTimes');

const otherParameters = [
    {parameterId: 0, rating: noIdeaRating},
    {parameterId: 1, rating: noIdeaRating},
    {parameterId: 2, rating: noIdeaRating}
];
assertEqualLength(otherParameters, 'otherParameters');

export { ratings, hostels, frequencies, foodItems, hygieneOfItems, absenceMenuItemTimes, otherParameters };
