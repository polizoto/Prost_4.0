const { Drink } = require('../models');

const drinkdata = [
  {
    name: "apple jack",
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "apple juice and vodka",
    glass_type: "coupe",
    instructions: "mix and drink"
  }
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;