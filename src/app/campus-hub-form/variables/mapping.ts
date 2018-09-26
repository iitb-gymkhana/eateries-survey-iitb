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

const regularCoffeeMap = {
  0: 'Lime',
  1: 'Honey Lime',
  2: 'Honey Lime Ginger',
  3: 'Lime Ginger',
  4: 'Tomato',
  5: 'Carrot',
  6: 'Pineapple',
  7: 'Watermelon',
  8: 'Musk Melon',
  9: 'Orange',
  10: 'Mausambi',
  11: 'Grapes',
  12: 'Pomogranate'
};

const mixedFruitJuiceMap = {
  0: 'Masala Shikanji',
  1: 'Ganga Jamuna',
  2: 'Maro Mari',
  3: 'Citru Gold',
  4: 'Classic Combo',
  5: 'O M P',
  6: 'Sweet 16',
  7: 'Watermelon Refresher',
  8: 'Atheletes Fuel',
  9: 'A B C Juice',
  10: 'Skin Glow'
};

const iceCreamShakesMap = {
  0: 'Vanilla Shake',
  1: 'Chocolate Shake',
  2: 'Butterscotch'
};

const milkShakesMap = {
  0: 'Rose',
  1: 'Chikoo Banana',
  2: 'Mango Banana',
  3: 'Strawberry Mango',
  4: 'Strawberry Banana',
  5: 'Kesar Thandai',
  6: 'Chic-Go-Wild',
  7: 'Fruit Punch',
  8: 'Dry Fruit Thandai',
  9: 'Dry Fruit Shake'
};

const fruitMilkShakesMap = {
  0: 'Banana',
  1: 'Chikoo',
  2: 'Papaya',
  3: 'Mango (Pulp)',
  4: 'Mango (Fresh in Season)',
  5: 'Apple',
  6: 'Musk Melon',
  7: 'Sitfal',
  8: 'Strawberry'
};

const dessertsMap = {
  0: 'Gulab Jamun',
  1: 'Gajar Halwa',
  2: 'Gulab Jamun with Ice Cream',
  3: 'Gajar Halwa with Ice Cream',
  4: 'Fruit Salad with Ice Cream',
  5: 'Sizzling Brownie'
};

const iceCreamFlavoursMap = {
  0: 'Vanilla',
  1: 'Smart Chocolate',
  2: 'Strawberry',
  3: 'Plain Pista',
  4: 'Smart Mango',
  5: 'Asli Chocolate',
  6: 'Mello Jello',
  7: 'Butter Scotch',
  8: 'Kaju Kishmis',
  9: 'Kesar Pisto',
  10: 'Malai Kulfi',
  11: 'Choco Chips',
  12: 'King Alfanso',
  13: 'Belgium Chocolate',
  14: 'Sitafal',
  15: 'Angeer Badam',
  16: 'Roasted Badam',
  17: 'Pineapple',
  18: 'Fruit Overload',
  19: 'K/P Kulfi'
};

const hotBeveragesMap = {
  0: 'Tea',
  1: 'Coffee',
  2: 'Hot Milk',
  3: 'Hot/Cold Bournvita',
  4: 'Hot/Cold Badam Milk',
  5: 'Hot Chocolate'
};

const coldBeveragesMap = {
  0: 'Masal Chas',
  1: 'Lassi',
  2: 'Mango Lassi',
  3: 'Strawberry Lassi',
  4: 'Choco Cold Coffee',
  5: 'Georgia Ice Tea',
  6: 'Georgia Cold Coffee'
};

const quickBitesMap = {
  0: 'Wada (1 Pc)',
  1: 'Wada Pav',
  2: 'Samosa',
  3: 'Samosa Pav',
  4: 'Bread Pakoda',
  5: 'Veg Pakoda',
  6: 'Coleslaw Sandwich',
  7: 'Chilly Paneer Roll'
};

const miniMealsMap = {
  0: 'Poori Bhaji',
  1: 'Paav Bhaji',
  2: 'Butter Paav Bhaji',
  3: 'Cheese Paav Bhaji',
  4: 'Chola Poori',
  5: 'Chole Bhature',
  6: 'Paneer Bhurji',
  7: 'Extra Plain Paav',
  8: 'Extra Butter Paav',
  9: 'Extra Butter',
  10: 'Extra Chole',
  11: 'Extra Bhature',
  12: 'Extra Poori',
  13: 'Extra Aloo',
  14: 'Extra Aloo Bhaji',
  15: 'Extra Pav Bhaji'
};

const paranthasMap = {
  0: 'Aloo Parantha',
  1: 'Gobi Parantha',
  2: 'Onion Parantha',
  3: 'Paneer Parantha',
  4: 'Extra Cheese',
  5: 'Curd Bowl',
  6: 'Veg Raita'
};

const riceMealsMap = {
  0: 'Tamato Rice',
  1: 'Daal Rice',
  2: 'Daal Khichdi',
  3: 'Curd Rice',
  4: 'Chola Rice',
  5: 'Veg Pulav',
  6: 'Paneer Pulav',
  7: 'Extra Daal',
  8: 'Extra Rice'
};

const maggiMap = {
  0: 'Masala Maggi',
  1: 'Vegetable Maggi',
  2: 'Hot N Spice Maggi',
  3: 'Veg Schezwan Maggi',
  4: 'Cheese Maggi',
  5: 'Cheese Add On'
};

const chaatMap = {
  0: 'Paani Puri',
  1: 'Sev Puri',
  2: 'Masala Puri',
  3: 'Aloo Chaat',
  4: 'Papdi Chaat',
  5: 'Bhel Puri',
  6: 'Dahi Papdi Chat',
  7: 'Dahi Aloo Chat',
  8: 'Dahi Bhel Puri',
  9: 'Dahi Sev Puri',
  10: 'Samosa Chaat',
  11: 'Ragda Patties',
  12: 'Cheese Sev Puri',
  13: 'Dahi Samosa Chaat',
  14: 'Cheese Aloo Chaat',
  15: 'Cheese Papdi Chaat',
  16: 'Cheese Bhel Puri Gila',
  17: 'Dahi Ragda Patties',
  18: 'Samosa Ragda Chaat',
  19: 'Cheese Dahi Papdi Chaat',
  20: 'Cheese Samosa Chaat',
  21: 'Cheese Samosa Ragda Chaat'
};

const chineseMap = {
  0: 'Veg Machurian',
  1: 'Veg Fried Rice',
  2: 'Veg Hakka Noodles',
  3: 'Veg Schezwan Rice',
  4: 'Veg Schezwan Noodles',
  5: 'Veg Hakka Noodles with Manchurian Gravy',
  6: 'Veg Fried Rice with Manchurian Gravy',
  7: 'Veg Hakka Noodles with Manchurian Gravy + Ice Tea',
  8: 'Veg Fried Rice with Manchurian Gravy + Ice Tea',
  9: 'Extra Schezwan Sauce'
};

const extrasMap = {
  0: 'Extra Cheese',
  1: 'Extra Mayonnaise',
  2: 'Extra Patto Wafers'
};

const sandwichMap = {
  0: 'Veg Sandwich',
  1: 'Veg Cheese Sandwich',
  2: 'Masala Sandwich',
  3: 'Cheese Masala Sandwich',
  4: 'Capsicum Chilly Sandwich',
  5: 'Cheese Chilly Sandwich',
  6: 'Cheese Chutney Toast',
  7: 'Chocolate Sandwich Toast',
  8: 'Aloo Slice',
  9: 'Cheese Aloo Slice',
  10: 'Bead Butter / Cheese Bread Butter',
  11: 'Paneer Tikka Sandwich',
  12: 'Paneer Tikka Cheese Sandwich',
  13: 'Paneer Cheese Chilly Sandwich',
  14: 'Paneer Mayonnaise Sandwich',
  15: 'Paneer Cheese Mayonnaise Sandwich',
  16: 'Veg Mayonnaise Sandwich',
  17: 'Cheese Mayonnaise Sandwich',
  18: 'Mayonnaise Cheese Chilly Sandwich',
  19: 'Cheese Open Sandwich',
  20: 'Paneer Open Sandwich',
  21: 'Cheese Paneer Open Sandwich'
};

const frankieMap = {
  0: 'Veg Frankie',
  1: 'Veg Cheese Frankie',
  2: 'Veg Schezwan Frankie',
  3: 'Veg Cheese Schezwan Franky',
  4: 'Paneer Frankie',
  5: 'Paneer Cheese Frankie',
  6: 'Paneer Schezwan Frankie',
  7: 'Paneer Cheese Schezwan Frankie',
  8: 'Mayonnaise Frankie',
  9: 'Cheese Mayonnaise Frankie',
  10: 'Noodle Frankie'
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
  regularCoffee: regularCoffeeMap,
  mixedFruitJuice: mixedFruitJuiceMap,
  iceCreamShakes: iceCreamShakesMap,
  milkShakes: milkShakesMap,
  fruitMilkShakes: fruitMilkShakesMap,
  desserts: dessertsMap,
  iceCreamFlavours: iceCreamFlavoursMap,
  hotBeverages: hotBeveragesMap,
  coldBeverages: coldBeveragesMap,
  quickBites: quickBitesMap,
  miniMeals: miniMealsMap,
  paranthas: paranthasMap,
  riceMeals: riceMealsMap,
  maggi: maggiMap,
  chaat: chaatMap,
  chinese: chineseMap,
  extras: extrasMap,
  sandwich: sandwichMap,
  frankie: frankieMap,
  hygieneOfItems: hygieneOfItemsMap,
  absenceMenuItemTimes: absenceMenuItemTimesMap,
  otherParameters: otherParametersMap
};

export { surveyOptionsMappings };
