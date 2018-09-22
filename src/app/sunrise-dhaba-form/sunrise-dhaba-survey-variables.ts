import { surveyOptionsMappings } from './sunrise-dhaba-survey-variables.mapping';

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

const phoneNumber = [
  { id: 0, value: '' }
];

const frequency = [
  { id: 0, value: '' }
];
const frequencyOptions = [0, 1, 2, 3];
// assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = ratingOptions.length - 1;

const breakfastItems = [
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
  { id: 27, value: noIdeaRating }
];
assertEqualLength(breakfastItems, 'breakfastItems');

const appetizersItems = [
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
  { id: 30, value: noIdeaRating }
];
assertEqualLength(appetizersItems, 'appetizersItems');

const biryaniVegItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating }
];
assertEqualLength(biryaniVegItems, 'biryaniVegItems');

const biryaniNonVegItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];
assertEqualLength(biryaniNonVegItems, 'biryaniNonVegItems');

const tandoorItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];
assertEqualLength(tandoorItems, 'tandoorItems');

const vegSpecialDishesItems = [
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
  { id: 15, value: noIdeaRating }
];
assertEqualLength(vegSpecialDishesItems, 'vegSpecialDishesItems');

const paneerSpecialDishesItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];
assertEqualLength(paneerSpecialDishesItems, 'paneerSpecialDishesItems');

const chickenSpecialDishesItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];
assertEqualLength(chickenSpecialDishesItems, 'chickenSpecialDishesItems');

const fishDishesItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];
assertEqualLength(fishDishesItems, 'fishDishesItems');

const vegRiceAndNoodlesItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];
assertEqualLength(vegRiceAndNoodlesItems, 'vegRiceAndNoodlesItems');

const nonVegRiceAndNoodlesItems = [
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
assertEqualLength(nonVegRiceAndNoodlesItems, 'nonVegRiceAndNoodlesItems');

const breadBasketItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating }
];
assertEqualLength(breadBasketItems, 'breadBasketItems');

const beveragesAndJuicesItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];
assertEqualLength(beveragesAndJuicesItems, 'beveragesAndJuicesItems');

const dessertItems = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];
assertEqualLength(dessertItems, 'dessertItems');

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
  email,
  ratingOptions,
  phoneNumber,
  frequency,
  frequencyOptions,
  breakfastItems,
  appetizersItems,
  biryaniVegItems,
  biryaniNonVegItems,
  tandoorItems,
  vegSpecialDishesItems,
  paneerSpecialDishesItems,
  chickenSpecialDishesItems,
  fishDishesItems,
  vegRiceAndNoodlesItems,
  nonVegRiceAndNoodlesItems,
  breadBasketItems,
  beveragesAndJuicesItems,
  dessertItems,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
};
