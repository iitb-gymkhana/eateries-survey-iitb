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

const foodItemsMap = {
    0: 'Tea/Coffee',
    1: 'Soups',
    2: 'Milkshakes',
    3: 'Momos',
    4: 'Parathas',
    5: 'South indian dishes',
    6: 'Maggi',
    7: 'Veg frankies',
    8: 'Chicken frankies',
    9: 'Veg rice and noodles',
    10: 'Chicken rice and noodles',
    11: 'Veg Main Course',
    12: 'Paneer Main course',
    13: 'Chicken Main Course',
    14: 'Egg items',
    15: 'Sandwiches',
    16: 'Aamras',
    17: 'Nimbu pani',
    18: 'Patties/rolls'
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
    foodItems: foodItemsMap,
    hygieneOfItems: hygieneOfItemsMap,
    absenceMenuItemTimes: absenceMenuItemTimesMap,
    otherParameters: otherParametersMap
};

module.exports = surveyOptionsMappings;
