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

const phoneNumber = [
  { id: 0, value: '' }
];

const frequency = [
  { id: 0, value: '' }
];
const frequencyOptions = [0, 1, 2, 3];
// assertEqualLength(frequencies, 'frequencies');

const noIdeaRating = (ratingOptions.length - 1).toString();

const vegStarters = [
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
  { id: 12, value: noIdeaRating }
];

assertEqualLength(vegStarters, 'vegStarters');

const nonVegStarters = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating }
];

assertEqualLength(nonVegStarters, 'nonVegStarters');

const regularCoffee = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];

assertEqualLength(regularCoffee, 'regularCoffee');

const blackCoffee = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];

assertEqualLength(blackCoffee, 'blackCoffee');

const milkshakes = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating }
];

assertEqualLength(milkshakes, 'milkshakes');

const sundaes = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating }
];

assertEqualLength(sundaes, 'sundaes');

const nonVegPizzas = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating }
];

assertEqualLength(nonVegPizzas, 'nonVegPizzas');

const vegPizzas = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(vegPizzas, 'vegPizzas');

const sandwiches = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating },
  { id: 7, value: noIdeaRating }
];

assertEqualLength(sandwiches, 'sandwiches');

const paninis = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(paninis, 'paninis');

const wraps = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating },
  { id: 6, value: noIdeaRating }
];

assertEqualLength(wraps, 'wraps');

const pastas = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(pastas, 'pastas');

const burgers = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(burgers, 'burgers');

const extraToppingsOrDips = [
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

assertEqualLength(extraToppingsOrDips, 'extraToppingsOrDips');

const regularTea = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating }
];

assertEqualLength(regularTea, 'regularTea');

const greenTea = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(greenTea, 'greenTea');

const infusionTea = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating }
];

assertEqualLength(infusionTea, 'infusionTea');

const mojito = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(infusionTea, 'infusionTea');

const slush = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating }
];

assertEqualLength(slush, 'slush');

const iceTea = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(iceTea, 'iceTea');

const frappe = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating },
  { id: 3, value: noIdeaRating },
  { id: 4, value: noIdeaRating },
  { id: 5, value: noIdeaRating }
];

assertEqualLength(frappe, 'frappe');

const brewtastic = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(brewtastic, 'brewtastic');

const onTheRocks = [
  { id: 0, value: noIdeaRating },
  { id: 1, value: noIdeaRating },
  { id: 2, value: noIdeaRating }
];

assertEqualLength(onTheRocks, 'onTheRocks');

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
  vegStarters,
  nonVegStarters,
  regularCoffee,
  blackCoffee,
  milkshakes,
  sundaes,
  nonVegPizzas,
  vegPizzas,
  sandwiches,
  paninis,
  wraps,
  pastas,
  burgers,
  extraToppingsOrDips,
  regularTea,
  greenTea,
  infusionTea,
  mojito,
  slush,
  iceTea,
  frappe,
  brewtastic,
  onTheRocks,
  hygieneOfItems,
  absenceMenuItemTimes,
  absenceMenuItemTimesOptions,
  otherParameters,
  otherSuggestions
};
