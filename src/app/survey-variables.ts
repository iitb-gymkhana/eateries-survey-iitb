const ratings = ['1', '2', '3', '4', '5', 'No idea'];

const hostels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', 'Tansa'];
const frequencies = ['Almost daily', '2-3 times a week', 'Almost every week', 'Less than once a week'];
const foodItems = [
    {name: 'Tea/Coffee', rating: ratings[ratings.length - 1]},
    {name: 'Soups', rating: ratings[ratings.length - 1]},
    {name: 'Milkshakes', rating: ratings[ratings.length - 1]},
    {name: 'Momos', rating: ratings[ratings.length - 1]},
    {name: 'Parathas', rating: ratings[ratings.length - 1]},
    {name: 'South indian dishes', rating: ratings[ratings.length - 1]},
    {name: 'Maggi', rating: ratings[ratings.length - 1]},
    {name: 'Veg frankies', rating: ratings[ratings.length - 1]},
    {name: 'Chicken frankies', rating: ratings[ratings.length - 1]},
    {name: 'Veg rice and noodles', rating: ratings[ratings.length - 1]},
    {name: 'Chicken rice and noodles', rating: ratings[ratings.length - 1]},
    {name: 'Veg Main Course', rating: ratings[ratings.length - 1]},
    {name: 'Paneer Main course', rating: ratings[ratings.length - 1]},
    {name: 'Chicken Main Course', rating: ratings[ratings.length - 1]},
    {name: 'Egg items', rating: ratings[ratings.length - 1]},
    {name: 'Sandwiches', rating: ratings[ratings.length - 1]},
    {name: 'Aamras', rating: ratings[ratings.length - 1]},
    {name: 'Nimbu pani', rating: ratings[ratings.length - 1]},
    {name: 'Patties/rolls', rating: ratings[ratings.length - 1]}
];

const hygieneOfItems = [
    {hygieneOf: 'Cleanliness of utensils', level: ratings[ratings.length - 1]},
    {hygieneOf: 'Cleanliness of Tables', level: ratings[ratings.length - 1]},
    {hygieneOf: 'Cleanliness of cook', level: ratings[ratings.length - 1]},
    {hygieneOf: 'Overall outlet cleanliness', level: ratings[ratings.length - 1]}
];

const absenceMenuItemTimes = ['Once', 'Two or three times a week', 'Rarely'];

const otherParameters = [
    {parameter: 'Staff Behaviour', rating: ratings[ratings.length - 1]},
    {parameter: 'Serving Time', rating: ratings[ratings.length - 1]},
    {parameter: 'Overall Experience', rating: ratings[ratings.length - 1]}
];

export { ratings, hostels, frequencies, foodItems, hygieneOfItems, absenceMenuItemTimes, otherParameters }