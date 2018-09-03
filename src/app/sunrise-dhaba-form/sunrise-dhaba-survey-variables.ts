import { surveyOptionsMappings } from './sunrise-dhaba-survey-variables.mapping';

function assertEqualLength(arr, option) {
  if (arr.length !== Object.keys(surveyOptionsMappings[option]).length) {
      console.error(`Few '${option}' options missing`);
  }
}

const ratings = [0, 1, 2, 3, 4, 5];
assertEqualLength(ratings, 'ratings');

const frequencies = [0, 1, 2, 3];
assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = ratings.length - 1;

const breakfastItems = [
  { itemId: 0, rating: noIdeaRating },
  { itemId: 1, rating: noIdeaRating },
  { itemId: 2, rating: noIdeaRating },
  { itemId: 3, rating: noIdeaRating },
  { itemId: 4, rating: noIdeaRating },
  { itemId: 5, rating: noIdeaRating },
  { itemId: 6, rating: noIdeaRating },
  { itemId: 7, rating: noIdeaRating },
  { itemId: 8, rating: noIdeaRating },
  { itemId: 9, rating: noIdeaRating },
  { itemId: 10, rating: noIdeaRating },
  { itemId: 11, rating: noIdeaRating },
  { itemId: 12, rating: noIdeaRating },
  { itemId: 13, rating: noIdeaRating },
  { itemId: 14, rating: noIdeaRating },
  { itemId: 15, rating: noIdeaRating },
  { itemId: 16, rating: noIdeaRating },
  { itemId: 17, rating: noIdeaRating },
  { itemId: 18, rating: noIdeaRating },
  { itemId: 19, rating: noIdeaRating },
  { itemId: 20, rating: noIdeaRating },
  { itemId: 21, rating: noIdeaRating },
  { itemId: 22, rating: noIdeaRating },
  { itemId: 23, rating: noIdeaRating },
  { itemId: 24, rating: noIdeaRating },
  { itemId: 25, rating: noIdeaRating },
  { itemId: 26, rating: noIdeaRating },
  { itemId: 27, rating: noIdeaRating }
];
assertEqualLength(breakfastItems, 'breakfastItems');

const appetizersItems = [
  { itemId: 28, rating: noIdeaRating },
  { itemId: 29, rating: noIdeaRating },
  { itemId: 30, rating: noIdeaRating },
  { itemId: 31, rating: noIdeaRating },
  { itemId: 32, rating: noIdeaRating },
  { itemId: 33, rating: noIdeaRating },
  { itemId: 34, rating: noIdeaRating },
  { itemId: 35, rating: noIdeaRating },
  { itemId: 36, rating: noIdeaRating },
  { itemId: 37, rating: noIdeaRating },
  { itemId: 38, rating: noIdeaRating },
  { itemId: 39, rating: noIdeaRating },
  { itemId: 40, rating: noIdeaRating },
  { itemId: 41, rating: noIdeaRating },
  { itemId: 42, rating: noIdeaRating },
  { itemId: 43, rating: noIdeaRating },
  { itemId: 44, rating: noIdeaRating },
  { itemId: 45, rating: noIdeaRating },
  { itemId: 46, rating: noIdeaRating },
  { itemId: 47, rating: noIdeaRating },
  { itemId: 48, rating: noIdeaRating },
  { itemId: 49, rating: noIdeaRating },
  { itemId: 50, rating: noIdeaRating },
  { itemId: 51, rating: noIdeaRating },
  { itemId: 52, rating: noIdeaRating },
  { itemId: 53, rating: noIdeaRating },
  { itemId: 54, rating: noIdeaRating },
  { itemId: 55, rating: noIdeaRating },
  { itemId: 56, rating: noIdeaRating },
  { itemId: 57, rating: noIdeaRating },
  { itemId: 58, rating: noIdeaRating }
];
assertEqualLength(appetizersItems, 'appetizersItems');

const biryaniVegItems = [
  { itemId: 59, rating: noIdeaRating },
  { itemId: 60, rating: noIdeaRating },
  { itemId: 61, rating: noIdeaRating },
  { itemId: 62, rating: noIdeaRating },
  { itemId: 63, rating: noIdeaRating },
  { itemId: 64, rating: noIdeaRating },
  { itemId: 65, rating: noIdeaRating },
  { itemId: 66, rating: noIdeaRating }
];
assertEqualLength(biryaniVegItems, 'biryaniVegItems');

const biryaniNonVegItems = [
  { itemId: 67, rating: noIdeaRating },
  { itemId: 68, rating: noIdeaRating },
  { itemId: 69, rating: noIdeaRating }
];
assertEqualLength(biryaniNonVegItems, 'biryaniNonVegItems');

const tandoorItems = [
  { itemId: 70, rating: noIdeaRating },
  { itemId: 71, rating: noIdeaRating },
  { itemId: 72, rating: noIdeaRating },
  { itemId: 73, rating: noIdeaRating },
  { itemId: 74, rating: noIdeaRating },
  { itemId: 75, rating: noIdeaRating },
  { itemId: 76, rating: noIdeaRating }
];
assertEqualLength(tandoorItems, 'tandoorItems');

const vegSpecialDishesItems = [
  { itemId: 77, rating: noIdeaRating },
  { itemId: 78, rating: noIdeaRating },
  { itemId: 79, rating: noIdeaRating },
  { itemId: 80, rating: noIdeaRating },
  { itemId: 81, rating: noIdeaRating },
  { itemId: 82, rating: noIdeaRating },
  { itemId: 83, rating: noIdeaRating },
  { itemId: 84, rating: noIdeaRating },
  { itemId: 85, rating: noIdeaRating },
  { itemId: 86, rating: noIdeaRating },
  { itemId: 87, rating: noIdeaRating },
  { itemId: 88, rating: noIdeaRating },
  { itemId: 89, rating: noIdeaRating },
  { itemId: 90, rating: noIdeaRating },
  { itemId: 91, rating: noIdeaRating },
  { itemId: 92, rating: noIdeaRating }
];
assertEqualLength(vegSpecialDishesItems, 'vegSpecialDishesItems');

const paneerSpecialDishesItems = [
  { itemId: 93, rating: noIdeaRating },
  { itemId: 94, rating: noIdeaRating },
  { itemId: 95, rating: noIdeaRating },
  { itemId: 96, rating: noIdeaRating },
  { itemId: 97, rating: noIdeaRating },
  { itemId: 98, rating: noIdeaRating }
];
assertEqualLength(paneerSpecialDishesItems, 'paneerSpecialDishesItems');

const chickenSpecialDishesItems = [
  { itemId: 99, rating: noIdeaRating },
  { itemId: 100, rating: noIdeaRating },
  { itemId: 101, rating: noIdeaRating },
  { itemId: 102, rating: noIdeaRating },
  { itemId: 103, rating: noIdeaRating },
  { itemId: 104, rating: noIdeaRating }
];
assertEqualLength(chickenSpecialDishesItems, 'chickenSpecialDishesItems');

const fishDishesItems = [
  { itemId: 105, rating: noIdeaRating },
  { itemId: 106, rating: noIdeaRating },
  { itemId: 107, rating: noIdeaRating },
  { itemId: 108, rating: noIdeaRating },
  { itemId: 109, rating: noIdeaRating },
  { itemId: 110, rating: noIdeaRating },
  { itemId: 111, rating: noIdeaRating }
];
assertEqualLength(fishDishesItems, 'fishDishesItems');

const vegRiceAndNoodlesItems = [
  { itemId: 112, rating: noIdeaRating },
  { itemId: 113, rating: noIdeaRating },
  { itemId: 114, rating: noIdeaRating },
  { itemId: 115, rating: noIdeaRating },
  { itemId: 116, rating: noIdeaRating },
  { itemId: 117, rating: noIdeaRating }
];
assertEqualLength(vegRiceAndNoodlesItems, 'vegRiceAndNoodlesItems');

const nonVegRiceAndNoodlesItems = [
  { itemId: 118, rating: noIdeaRating },
  { itemId: 119, rating: noIdeaRating },
  { itemId: 120, rating: noIdeaRating },
  { itemId: 121, rating: noIdeaRating },
  { itemId: 122, rating: noIdeaRating },
  { itemId: 123, rating: noIdeaRating },
  { itemId: 124, rating: noIdeaRating },
  { itemId: 125, rating: noIdeaRating },
  { itemId: 126, rating: noIdeaRating },
  { itemId: 127, rating: noIdeaRating }
];
assertEqualLength(nonVegRiceAndNoodlesItems, 'nonVegRiceAndNoodlesItems');

const breadBasketItems = [
  { itemId: 128, rating: noIdeaRating },
  { itemId: 129, rating: noIdeaRating }
];
assertEqualLength(breadBasketItems, 'breadBasketItems');

const beveragesAndJuicesItems = [
  { itemId: 130, rating: noIdeaRating },
  { itemId: 131, rating: noIdeaRating },
  { itemId: 132, rating: noIdeaRating },
  { itemId: 133, rating: noIdeaRating },
  { itemId: 134, rating: noIdeaRating },
  { itemId: 135, rating: noIdeaRating },
  { itemId: 136, rating: noIdeaRating }
];
assertEqualLength(beveragesAndJuicesItems, 'beveragesAndJuicesItems');

const dessertItems = [
  { itemId: 137, rating: noIdeaRating },
  { itemId: 138, rating: noIdeaRating },
  { itemId: 139, rating: noIdeaRating }
];
assertEqualLength(dessertItems, 'dessertItems');

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

export {
  ratings,
  frequencies,
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
  otherParameters
};
