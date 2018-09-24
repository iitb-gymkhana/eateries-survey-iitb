const ratingsMap = {
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '5',
  5: 'No idea'
};

const frequenciesMap = {
  0: 'Almost daily',
  1: '2-3 times a week',
  2: 'Almost every week',
  3: 'Less than once a week'
};

const vegStartersMap = {
  0: 'Aloo Tikki & Green Chutney',
  1: 'French Fries',
  2: 'Chilli Garlic French Fries',
  3: 'Chatpata French Fries',
  4: 'Piri-Piri French Fries',
  5: 'French Fries & Mayonnaise',
  6: 'Cheese French Fries',
  7: 'Veggie Fingers',
  8: 'Garlic Butter Toast',
  9: 'Cheese Garlic Bread',
  10: 'Suprime Garlic Bread',
  11: 'Nachos & Salsa',
  12: 'Nachos, Cheese & Salsa'
};

const nonVegStartersMap = {
  0: 'Chicken Nuggets',
  1: 'Chicken Cuttlet',
  2: 'Chicken Sheek Kebab',
  3: 'Chicken Wings'
};

const regularCoffeeMap = {
  0: 'Cappuccino',
  1: 'Cafe Latte',
  2: 'Hot Chocolate',
  3: 'Cafe Mocha',
  4: 'Irish Coffee',
  5: 'Caramel Lattel',
  6: 'Hazelnut Latte'
};

const blackCoffeeMap = {
  0: 'Espresso Shot',
  1: 'Caffenio',
  2: 'Espresso Americano',
  3: 'White Italian',
  4: 'Macchiato',
  5: 'Vienna/Flat White',
  6: 'Irish Espresso'
};

const milkshakesMap = {
  0: 'Butter Scotch / Vanilla',
  1: 'Chocolate Shake',
  2: 'Paan/Saffron Cream',
  3: 'Oreo Shake',
  4: 'Mars-Milk Shake'
};

const sundaesMap = {
  0: 'Men in Black',
  1: 'Black Magic'
};

const nonVegPizzasMap = {
  0: 'Chicken Love | Sausages Giant',
  1: 'Tandoori Chicken | Makhani Chicken | Chicken Salute | Chicken Hawaiian',
  2: 'Five Star Deluxe | Indian Hot Chicken Keema',
  3: 'Mighty Meaty | Party Lovers'
};

const vegPizzasMap = {
  0: 'Margherita',
  1: 'Capsicum | Corn | Onion | Tomato',
  2: 'Farm Fresh | Golden Delight | Mushrom Magic | Spicy Treat Mexican Delight',
  3: 'Tandoori Paneer | Hawaiian Special Veggi Delight | Makhani Paneer | Corn O Mania',
  4: '5 Star Delux',
  5: 'Five Pepper | Party Lovers Feverate Five'
};

const sandwichesMap = {
  0: 'Tomato & Garlic',
  1: 'Veg Coleslaw',
  2: 'Garden Fresh',
  3: 'Cheese & Chutney',
  4: 'Coleslaw Chicken',
  5: 'Barbeque Chicken',
  6: 'Spicy Chicken',
  7: 'Chicken & Cheese'
};

const paninisMap = {
  0: 'Grilled Veg Patty',
  1: 'Veggie Delight',
  2: 'Fiery Paneer',
  3: 'Smoked Chicken Salami',
  4: 'Grilled Chicken Patty',
  5: 'Cocktail Chicken Sausage'
};

const wrapsMap = {
  0: 'Classic Veg',
  1: 'Paneer Kathi',
  2: 'Nachos Cheese',
  3: 'Classic Non-Veg',
  4: 'Chicken Kathi',
  5: 'Non-Veg Pizza',
  6: 'Chicken Keema'
};

const pastasMap = {
  0: 'White Sauce',
  1: 'Red Sauce',
  2: 'Makhani Sauce'
};

const burgersMap = {
  0: 'The B&B Classic',
  1: 'Made in Mexico',
  2: 'Grilled Cheese',
  3: 'Barbeque',
  4: 'New Yorker Cheese',
  5: 'Double Patty'
};

const extraToppingsOrDipsMap = {
  0: 'Onion / Tomato / Capsicum',
  1: 'Mushroom / Pineapple / Sweet Corn',
  2: 'Mayonnaise / Schezwan',
  3: 'Jalapenos / Oilives / Babycorn',
  4: 'Extra Cheese [Panini]',
  5: 'Veg / Paneer Patty',
  6: 'Chicken Patty / Sausage / Salami',
  7: 'Hot Garlic Dip',
  8: 'Cheese / Mexican Salsa Dip',
  9: 'Cheese Jalapeno Dip'
};

const regularTeaMap = {
  0: 'Assam / Hot Lemon',
  1: 'Masala / Ginger / Elaichi'
};

const greenTeaMap = {
  0: 'Classic',
  1: 'Classic with Lemon',
  2: 'Lemongrass / Jasine / Tulsi'
};

const infusionTeaMap = {
  0: 'Cranberry Apple / Kashmiri Kahwa',
  1: 'Apple Cinnamon / Moraccan Mint'
};

const mojitoMap = {
  0: 'Strawbetty / Citrus Blue',
  1: 'Black Currant / Classic Mint',
  2: 'Green Apple'
};

const slushMap = {
  0: 'Strawbetty / Mango / Green Apple',
  1: 'Cool Blue / Black Current'
};

const iceTeaMap = {
  0: 'Classic Lemon',
  1: 'Green Apple / Mango / Strawberry',
  2: 'Peach / Litchi'
};

const frappeMap = {
  0: 'Black Supernova',
  1: 'Cold Coffee',
  2: 'Mango / Strawberry',
  3: 'Black Current / Litchi',
  4: 'Choco / Vanilla',
  5: 'Hazel / Caramal / Iceberg / Irish'
};

const brewtasticMap = {
  0: 'Coffee Crunch',
  1: 'Tall N Dark',
  2: 'Brownie Feast'
};

const onTheRocksMap = {
  0: 'Iced Latte',
  1: 'Iced Mocha',
  2: 'Caramel / Hazel / Irish Latte'
};

const hygieneOfItemsMap = {
  0: 'Cleanliness of utensils',
  1: 'Cleanliness of Tables',
  2: 'Cleanliness of cook',
  3: 'Overall outlet cleanliness'
};

const absenceMenuItemTimesMap = {
  0: 'Once',
  1: 'Two or three times a week',
  2: 'Rarely'
};

const otherParametersMap = {
  0: 'Staff Behaviour',
  1: 'Serving Time',
  2: 'Overall Experience'
};

const surveyOptionsMappings = {
  ratings: ratingsMap,
  frequencies: frequenciesMap,
  vegStarters: vegStartersMap,
  nonVegStarters: nonVegStartersMap,
  regularCoffee: regularCoffeeMap,
  blackCoffee: blackCoffeeMap,
  milkshakes: milkshakesMap,
  sundaes: sundaesMap,
  nonVegPizzas: nonVegPizzasMap,
  vegPizzas: vegPizzasMap,
  sandwiches: sandwichesMap,
  paninis: paninisMap,
  wraps: wrapsMap,
  pastas: pastasMap,
  burgers: burgersMap,
  extraToppingsOrDips: extraToppingsOrDipsMap,
  regularTea: regularTeaMap,
  greenTea: greenTeaMap,
  infusionTea: infusionTeaMap,
  mojito: mojitoMap,
  slush: slushMap,
  iceTea: iceTeaMap,
  frappe: frappeMap,
  brewtastic: brewtasticMap,
  onTheRocks: onTheRocksMap,
  hygieneOfItems: hygieneOfItemsMap,
  absenceMenuItemTimes: absenceMenuItemTimesMap,
  otherParameters: otherParametersMap
};

module.exports = surveyOptionsMappings;
