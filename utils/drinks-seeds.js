const { Drink } = require('../models');

const drinkdata = [
  {
    name: 'Negroni',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "1 oz Gin, 1 oz Campari, 1 oz Carpano Antica",
    glass_type: "coupe",
    instructions: "Stir & strain, Garnish with a fancy orange twist"
  }
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;