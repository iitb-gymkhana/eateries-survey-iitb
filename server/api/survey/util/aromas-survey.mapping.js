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

const breakfastItemsMap = {
  0: 'Vada Pav',
  1: 'Samosa',
  2: 'Idli with Sambhar and Chutney',
  3: 'Medu Vada with Sambhar and Chutney',
  4: 'Vegetable Poha',
  5: 'Maggi',
  6: 'Masala Dosa',
  7: 'Plain Dosa',
  8: 'Pav Bhaji',
  9: 'Cheese Pav Bhaji',
  10: 'Upma with Sev',
  11: 'Veg Sandwich',
  12: 'Toast Sandwich',
  13: 'Grilled Cheese Sandwich',
  14: 'Masala Pav',
  15: 'Veg Club Sandwich',
  16: 'Missal Pav',
  17: 'Tomato Omelette',
  18: 'Onion Uthappam',
  19: 'Tomato Onion Uthappam',
  20: 'Paneer Pakoda',
  21: 'Onion Pakoda',
  22: 'Mix Veg Pakoda',
  23: 'Egg Omelet',
  24: 'Egg Bhurji',
  25: 'Egg Boiled',
  26: 'Chicken Fry',
  27: 'Chicken Pakoda'
};

const appetizersItemsMap = {
  0: 'Veg Chilly Gravy/Dry',
  1: 'Veg Crispy',
  2: 'Veg Schezwan Chilly Gravy/Dry',
  3: 'Veg Manchurian Chilly Gravy/Dry',
  4: 'Veg Mashroom Chilly Gravy/Dry',
  5: 'Veg Paneer Chilly Dry/Gravy',
  6: 'Paneer Tikka Dry',
  7: 'Paneer Tikka Masala',
  8: 'Paneer Butter Masala',
  9: 'paneer Kolhapuri Sabzi',
  10: 'Veg Tawa Subzi',
  11: 'Kaju Masala',
  12: 'Veg Kofta',
  13: 'Mashroom Masala',
  14: 'Hara Bhara Kebab',
  15: 'Cheese Balls',
  16: 'Chicken/Murg Tikka',
  17: 'Chicken Tandoori Full/Half',
  18: 'Chicken Manchurian Gravy/Dry',
  19: 'Chicken Lollipop',
  20: 'Chicken Crispy',
  21: 'Chicken Chilly Gravy/Dry',
  22: 'Chicken Schezwan Chilly',
  23: 'Pomfret Tandoori',
  24: 'Chicken Kathi Roll',
  25: 'Chicken Reshmi Tikk',
  26: 'Chicken Seekh Kebab',
  27: 'Butter Chicken',
  28: 'Chicken Kolhapuri',
  29: 'Chicken Kadai',
  30: 'Chicken Bhuma'
};

const biryaniVegItemsMap = {
  0: 'Veg Pulav',
  1: 'Paneer Dum Biryani',
  2: 'Veg Biryani',
  3: 'Veg Dum Biryani',
  4: 'Steam Rice',
  5: 'Jeera Rice',
  6: 'Curd Rice',
  7: 'Plain Rice'
};

const biryaniNonVegItemsMap = {
  0: 'Chicken Biryani',
  1: 'Prawns Biryani',
  2: 'Egg Biryani'
};

const tandoorItemsMap = {
  0: 'Tandoor Roti',
  1: 'Tandoor Nan',
  2: 'Paratha',
  3: 'Aloo/Gobi Paratha',
  4: 'Paneer Paratha',
  5: 'Chapati',
  6: 'Extra Butter'
};

const vegSpecialDishesItemsMap = {
  0: 'Mixed Veg',
  1: 'Veg Kadal',
  2: 'Veg Kolhapuri',
  3: 'Plain Palak',
  4: 'Aloo Mutter',
  5: 'Channa Masala',
  6: 'Aloo Gobi',
  7: 'Aloo Simla',
  8: 'Simla Masala',
  9: 'Gobi Masala',
  10: 'Tomato Bhartha',
  11: 'Green Peas Masala',
  12: 'Dal Tadka',
  13: 'Dal Fry',
  14: 'Butter Dal Fry',
  15: 'Dal Makhani'
};

const paneerSpecialDishesItemsMap = {
  0: 'Paneer Kadai',
  1: 'Paneer Makhanwala',
  2: 'Paneer Palak',
  3: 'Paneer Mutter',
  4: 'Paneer Pasanda',
  5: 'Paneer Masala'
};

const chickenSpecialDishesItemsMap = {
  0: 'Chicken Masala',
  1: 'Chicken Tikka Masala',
  2: 'Chicken Hyderabadi',
  3: 'Chicken Handi',
  4: 'Chicken Kadai',
  5: 'Chicken Masala'
};

const fishDishesItemsMap = {
  0: 'Fish Masala',
  1: 'Surmai Fry',
  2: 'Fish Fry',
  3: 'Prawns Koliwada',
  4: 'Surmai Masala',
  5: 'Prawns Masala',
  6: 'Pomfret Masala'
};

const vegRiceAndNoodlesItemsMap = {
  0: 'Veg - Fried Rice',
  1: 'Dal Khichdi',
  2: 'Veg - Schezwan Fried Rice',
  3: 'Veg - Hakka Noodles',
  4: 'Veg - Schezwan Noodles',
  5: 'American Chopsuey'
};

const nonVegRiceAndNoodlesItemsMap = {
  0: 'Checken Fried Rice',
  1: 'Checken Schezwan Fried Rice',
  2: 'Checken Hong Kong Fried Rice',
  3: 'Checken Hakka Noodles',
  4: 'Checken Schezwan Noodles',
  5: 'Checken Chinese Chopsy',
  6: 'Prawns Fried Rice',
  7: 'Prawns Schezwan Fried Rice',
  8: 'Egg Fried Rice',
  9: 'Chicken American Chopsy'
};

const breadBasketItemsMap = {
  0: 'Plain Bread Basket',
  1: 'Stuffed Basket'
};

const beveragesAndJuicesItemsMap = {
  0: 'Orange/Mosambi',
  1: 'Anar/Apple',
  2: 'Mango Juice',
  3: 'Nimbu Pani',
  4: 'Tea',
  5: 'Coffee',
  6: 'Milk Shakes'
};

const dessertItemsMap = {
  0: 'Rasmalai',
  1: 'Gulab Jamun',
  2: 'Kheer'
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
  breakfastItems: breakfastItemsMap,
  appetizersItems: appetizersItemsMap,
  biryaniVegItems: biryaniVegItemsMap,
  biryaniNonVegItems: biryaniNonVegItemsMap,
  tandoorItems: tandoorItemsMap,
  vegSpecialDishesItems: vegSpecialDishesItemsMap,
  paneerSpecialDishesItems: paneerSpecialDishesItemsMap,
  chickenSpecialDishesItems: chickenSpecialDishesItemsMap,
  fishDishesItems: fishDishesItemsMap,
  vegRiceAndNoodlesItems: vegRiceAndNoodlesItemsMap,
  nonVegRiceAndNoodlesItems: nonVegRiceAndNoodlesItemsMap,
  breadBasketItems: breadBasketItemsMap,
  beveragesAndJuicesItems: beveragesAndJuicesItemsMap,
  dessertItems: dessertItemsMap,
  hygieneOfItems: hygieneOfItemsMap,
  absenceMenuItemTimes: absenceMenuItemTimesMap,
  otherParameters: otherParametersMap
};

module.exports = surveyOptionsMappings;
