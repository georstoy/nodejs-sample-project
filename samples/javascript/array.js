const food = [
    'chocolate Corny',
    'zuchini dish'
]

const meals = ['coffee', ...food];

meals.push('another coffee');
console.log(meals.map(meal => 'Meal: '+meal));