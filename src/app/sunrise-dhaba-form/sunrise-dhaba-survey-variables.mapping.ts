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
  28: 'Veg Chilly Gravy/Dry',
  29: 'Veg Crispy',
  30: 'Veg Schezwan Chilly Gravy/Dry',
  31: 'Veg Manchurian Chilly Gravy/Dry',
  32: 'Veg Mashroom Chilly Gravy/Dry',
  33: 'Veg Paneer Chilly Dry/Gravy',
  34: 'Paneer Tikka Dry',
  35: 'Paneer Tikka Masala',
  36: 'Paneer Butter Masala',
  37: 'paneer Kolhapuri Sabzi',
  38: 'Veg Tawa Subzi',
  39: 'Kaju Masala',
  40: 'Veg Kofta',
  41: 'Mashroom Masala',
  42: 'Hara Bhara Kebab',
  43: 'Cheese Balls',
  44: 'Chicken/Murg Tikka',
  45: 'Chicken Tandoori Full/Half',
  46: 'Chicken Manchurian Gravy/Dry',
  47: 'Chicken Lollipop',
  48: 'Chicken Crispy',
  49: 'Chicken Chilly Gravy/Dry',
  50: 'Chicken Schezwan Chilly',
  51: 'Pomfret Tandoori',
  52: 'Chicken Kathi Roll',
  53: 'Chicken Reshmi Tikk',
  54: 'Chicken Seekh Kebab',
  55: 'Butter Chicken',
  56: 'Chicken Kolhapuri',
  57: 'Chicken Kadai',
  58: 'Chicken Bhuma'
};

const biryaniVegItemsMap = {
  59: 'Veg Pulav',
  60: 'Paneer Dum Biryani',
  61: 'Veg Biryani',
  62: 'Veg Dum Biryani',
  63: 'Steam Rice',
  64: 'Jeera Rice',
  65: 'Curd Rice',
  66: 'Plain Rice'
};

const biryaniNonVegItemsMap = {
  67: 'Chicken Biryani',
  68: 'Prawns Biryani',
  69: 'Egg Biryani'
};

const tandoorItemsMap = {
  70: 'Tandoor Roti',
  71: 'Tandoor Nan',
  72: 'Paratha',
  73: 'Aloo/Gobi Paratha',
  74: 'Paneer Paratha',
  75: 'Chapati',
  76: 'Extra Butter'
};

const vegSpecialDishesItemsMap = {
  77: 'Mixed Veg',
  78: 'Veg Kadal',
  79: 'Veg Kolhapuri',
  80: 'Plain Palak',
  81: 'Aloo Mutter',
  82: 'Channa Masala',
  83: 'Aloo Gobi',
  84: 'Aloo Simla',
  85: 'Simla Masala',
  86: 'Gobi Masala',
  87: 'Tomato Bhartha',
  88: 'Green Peas Masala',
  89: 'Dal Tadka',
  90: 'Dal Fry',
  91: 'Butter Dal Fry',
  92: 'Dal Makhani'
};

const paneerSpecialDishesItemsMap = {
  93: 'Paneer Kadai',
  94: 'Paneer Makhanwala',
  95: 'Paneer Palak',
  96: 'Paneer Mutter',
  97: 'Paneer Pasanda',
  98: 'Paneer Masala'
};

const chickenSpecialDishesItemsMap = {
  99: 'Chicken Masala',
  100: 'Chicken Tikka Masala',
  101: 'Chicken Hyderabadi',
  102: 'Chicken Handi',
  103: 'Chicken Kadai',
  104: 'Chicken Masala'
};

const fishDishesItemsMap = {
  105: 'Fish Masala',
  106: 'Surmai Fry',
  107: 'Fish Fry',
  108: 'Prawns Koliwada',
  109: 'Surmai Masala',
  110: 'Prawns Masala',
  111: 'Pomfret Masala'
};

const vegRiceAndNoodlesItemsMap = {
  112: 'Veg - Fried Rice',
  113: 'Dal Khichdi',
  114: 'Veg - Schezwan Fried Rice',
  115: 'Veg - Hakka Noodles',
  116: 'Veg - Schezwan Noodles',
  117: 'American Chopsuey'
};

const nonVegRiceAndNoodlesItemsMap = {
  118: 'Checken Fried Rice',
  119: 'Checken Schezwan Fried Rice',
  120: 'Checken Hong Kong Fried Rice',
  121: 'Checken Hakka Noodles',
  122: 'Checken Schezwan Noodles',
  123: 'Checken Chinese Chopsy',
  124: 'Prawns Fried Rice',
  125: 'Prawns Schezwan Fried Rice',
  126: 'Egg Fried Rice',
  127: 'Chicken American Chopsy'
};

const breadBasketItemsMap = {
  128: 'Plain Bread Basket',
  129: 'Stuffed Basket'
};

const beveragesAndJuicesItemsMap = {
  130: 'Orange/Mosambi',
  131: 'Anar/Apple',
  132: 'Mango Juice',
  133: 'Nimbu Pani',
  134: 'Tea',
  135: 'Coffee',
  136: 'Milk Shakes'
};

const dessertItemsMap = {
  137: 'Rasmalai',
  138: 'Gulab Jamun',
  139: 'Kheer'
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

export { surveyOptionsMappings };
