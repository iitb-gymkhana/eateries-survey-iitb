const ratingsMap = {
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '5',
  5: 'No idea'
};

const hostelsMap = {
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '5',
  5: '6',
  6: '7',
  7: '8',
  8: '9',
  9: '10',
  10: '11',
  11: '12',
  12: '13',
  13: '14',
  14: '15',
  15: '16',
  16: 'Tansa'
};


const frequenciesMap = {
  0: 'Almost daily',
  1: '2-3 times a week',
  2: 'Almost every week',
  3: 'Less than once a week'
};

const teaCoffeeMap = {
  0: 'Tea',
  1: 'Tea-cutting',
  2: 'Coffee',
  3: 'Milk',
  4: 'Bournvita',
  5: 'Hot Chocolate',
  6: 'Hot Boost Milk',
  7: 'Hot Horlicks Milk'
};

const milkshakesMap = {
  0: 'Roes Milkshake',
  1: 'Chocolate Milkshake',
  2: 'Bounvita Milkshake',
  3: 'Banana Milkshake',
  4: 'Butterscotch Milkshake',
  5: 'Strawbery Milkshake',
  6: 'Cold Coffee Milkshake',
  7: 'Mango Milkshake',
  8: 'Badam Lassi',
  9: 'Mango Lassi'
};

const juiceMap = {
  0: 'Lemon Juice',
  1: 'Mosambi Juice',
  2: 'Pineapple Juice',
  3: 'Water Melon Juice',
  4: 'Orange Juice',
  5: 'Mango Juice'
};

const parathaMap = {
  0: 'Aloo Paratha',
  1: 'Gobi Paratha',
  2: 'Onion Paratha',
  3: 'Mix Veg Paratha',
  4: 'Aloo Cheese Paratha',
  5: 'Onion Cheese Paratha',
  6: 'Gobi Cheese Paratha',
  7: 'Mix Veg Cheese Paratha',
  8: 'Paneer Paratha',
  9: 'Paneer Cheese Paratha',
  10: 'Plain Paratha',
  11: 'Butter Paratha'
};

const frankyMap = {
  0: 'Veg Franky',
  1: 'Veg Schezwan Franky',
  2: 'Veg Cheese Franky',
  3: 'Veg Schezwan Cheese Franky',
  4: 'Veg Thgada Franky',
  5: 'Egg Franky',
  6: 'Egg Schezwan Franky',
  7: 'Paneer Franky',
  8: 'Egg Cheese Franky',
  9: 'Egg Schezwan Cheese Franky',
  10: 'Paneer Cheese Franky',
  11: 'Egg Thgada Franky',
  12: 'Paneer Schezwan Franky',
  13: 'Paneer Schezwan Cheese Franky',
  14: 'Paneer Thgada Franky',
  15: 'Chicken Franky',
  16: 'Chicken Schezwan Franky',
  17: 'Chicken Cheese Franky',
  18: 'Chicken Schezwan Cheese Franky',
  19: 'Chicken Thgada Franky'
};

const eggItemsMap = {
  0: 'Boiled Egg',
  1: 'Fried Boiled Egg',
  2: 'Omelet',
  3: 'Double Omelet',
  4: 'Egg Bhurji',
  5: 'Double Half Fry',
  6: 'Double Full Fry',
  7: 'Boiled Egg Bhurgi'
};

const riceAndNoodlesMap = {
  0: 'Veg Hakka Noodle',
  1: 'Veg Fried Rice',
  2: 'Veg Schezwan Noodle',
  3: 'Veg Schezwan Rice',
  4: 'Veg Triple Rice',
  5: 'Egg Triple Rice',
  6: 'Veg Manchurian Rice',
  7: 'Veg Combination Rice',
  8: 'Egg Manchurian Rice',
  9: 'Paneer Manchurian Rice',
  10: 'Chicken Manchurian Rice',
  11: 'Paneer Triple Rice',
  12: 'Paneer Fried Rice',
  13: 'Paneer Hakka Noodle',
  14: 'Paneer Schezwan Fried Rice',
  15: 'Paneer Schezwan Hakka Noodle',
  16: 'Egg Hakka Noodle',
  17: 'Egg Fried Rice',
  18: 'Egg Schezwan Noodle',
  19: 'Egg Schezwan Rice',
  20: 'Chicken Noodle',
  21: 'Chicken Fried Rice',
  22: 'Chicken Schezwan Noodle',
  23: 'Chicken Schezwan Fried Rice',
  24: 'Chicken Triple Rice'
};

const riceMap = {
  0: 'Jeera Rice',
  1: 'Dal Khichdi',
  2: 'Dal Khichdi Tadka',
  3: 'Veg Pulav',
  4: 'Bhendi Rice',
  5: 'Tomato Rice',
  6: 'Egg Pulav',
  7: 'Egg Bhurji Rice',
  8: 'Paneer Pulav',
  9: 'Veg Biryani',
  10: 'Egg Biryani + Raita',
  11: 'Paneer Biryani + Raita',
  12: 'Chicken Biryani + Raita',
  13: 'Alu Bhendi Rice',
  14: 'Masala Rice',
  15: 'Alu Jeera Rice',
  16: 'Boiled Egg Bhurji Rice',
  17: 'Chicken Bhurji Rice',
  18: 'Rice',
  19: 'Chicken Pulav'
};

const dryChickenAndPaneerMap = {
  0: 'Paneer Schezwan Dry',
  1: 'Paneer Coriander Dry',
  2: 'Paneer Chilly Dry',
  3: 'Paneer Manchurian Dry',
  4: 'Paneer 65 Dry',
  5: 'Veg Manchurian Dry',
  6: 'Veg 65 Dry',
  7: 'Aloo Chilly',
  8: 'Gobi Manchurian',
  9: 'Chicken Garlic Dry',
  10: 'Chicken Schezwan Dry',
  11: 'Chicken Lollipop',
  12: 'Chicken 65 Dry',
  13: 'Chicken Chilly Dry',
  14: 'Chicken Manchurian Dry'
};

const sandwichMap = {
  0: 'Veg Sandwich',
  1: 'Aloo Sandwich',
  2: 'Veg Grilled Sandwich',
  3: 'Cheese Toast',
  4: 'Veg Cheese Sandwich',
  5: 'Veg Cheese Grilled Sandwich',
  6: 'Egg Sandwich',
  7: 'Egg Grilled Sandwich',
  8: 'Egg Cheese Sandwich',
  9: 'Egg Cheese Grilled Sandwich',
  10: 'Chicken Sandwich',
  11: 'Chicken Grilled Sandwich',
  12: 'Chicken Cheese Sandwich',
  13: 'Chicken Cheese Grilled Sandwich',
  14: 'Bread Butter',
  15: 'French Toast',
  16: 'Chinese Bhel',
  17: 'Burma Toast'
};

const dryBhajiMap = {
  0: 'Aloo Bhindi',
  1: 'Aloo Tomato',
  2: 'Aloo Gobi',
  3: 'Bhindi Fry',
  4: 'Aloo Jeera'
};

const vegAndPaneerGravyMap = {
  0: 'Aloo Mutter',
  1: 'Aloo Masala',
  2: 'Paneer Mutter Masala',
  3: 'Paneer Butter Masala',
  4: 'Paneer Kadai',
  5: 'Paneer Masala',
  6: 'Paneer Chilly',
  7: 'Palak Paneer',
  8: 'Paneer Bhurji',
  9: 'Veg Kadai'
};

const nonVegMap = {
  0: 'Egg Masala',
  1: 'Chicken Masala',
  2: 'Chicken Kadai',
  3: 'Chicken Fry',
  4: 'Chicken Sukkha',
  5: 'Butter Chicken'
};

const dalMap = {
  0: 'Dal Fry',
  1: 'Dal Tadka'
};

const maggiMap = {
  0: 'Plain Maggi',
  1: 'Plain Cheese Maggi',
  2: 'Veg Maggi',
  3: 'Veg Cheese Maggi',
  4: 'Egg Maggi',
  5: 'Toppa Maggi',
  6: 'Egg Cheese Maggi',
  7: 'Omelet Maggi',
  8: 'Omlet Cheese Maggi',
  9: 'Special Fry Maggi',
  10: 'Top Ramen Curry Schezwan Maggi',
  11: 'Tadka Maggi',
  12: 'Top Ramen Maggi',
  13: 'Spicy Maggi'
};

const soupsMap = {
  0: 'Veg Manchow',
  1: 'Chicken Manchow',
  2: 'Tomato',
  3: 'Veg Clear'
};

const dosaMap = {
  0: 'Sada Dosa',
  1: 'Onion Dosa',
  2: 'Schezwan Dosa',
  3: 'Plain Uttapam',
  4: 'Masala Dosa',
  5: 'Mysore Sada Dosa',
  6: 'Sada Cheese Dosa',
  7: 'Butter Schezwan Onion Dosa',
  8: 'Paper Dosa',
  9: 'Mysore Masala Dosa',
  10: 'Egg Uttapam',
  11: 'Onion Cheese Dosa',
  12: 'Schezwan Cheese Dosa',
  13: 'Rava Schezwan Dosa',
  14: 'Masala Cheese Dosa',
  15: 'Butter Sada Dosa',
  16: 'Butter Onion Dosa',
  17: 'Butter Schezwan Dosa',
  18: 'Onion Uttapam',
  19: 'Schezwan Uttapam',
  20: 'Butter Masala Dosa',
  21: 'Schezwan Onion Dosa',
  22: 'Schezwan Masala Dosa',
  23: 'Rava Dosa',
  24: 'Masala Uttapam',
  25: 'Egg Dosa',
  26: 'Butter Schezwan Masala Dosa',
  27: 'Rava Masala Dosa',
  28: 'Egg Schezwan Dosa',
  29: 'Paneer Schezwan Dosa',
  30: 'Paneer Masala Dosa',
  31: 'Thagada Dosa'
};

const extrasMap = {
  0: 'Extra Cheese',
  1: 'Extra Butter',
  2: 'Extra Raita'
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
  hostels: hostelsMap,
  frequencies: frequenciesMap,
  teaCoffee: teaCoffeeMap,
  milkshakes: milkshakesMap,
  juice: juiceMap,
  paratha: parathaMap,
  franky: frankyMap ,
  eggItems: eggItemsMap,
  riceAndNoodles: riceAndNoodlesMap,
  rice: riceMap,
  dryChickenAndPaneer: dryChickenAndPaneerMap,
  sandwich: sandwichMap,
  dryBhaji: dryBhajiMap,
  vegAndPaneerGravy: vegAndPaneerGravyMap,
  nonVeg: nonVegMap,
  dal: dalMap,
  maggi: maggiMap,
  soups: soupsMap,
  dosa: dosaMap,
  extras: extrasMap,
  hygieneOfItems: hygieneOfItemsMap,
  absenceMenuItemTimes: absenceMenuItemTimesMap,
  otherParameters: otherParametersMap
};

export { surveyOptionsMappings };
