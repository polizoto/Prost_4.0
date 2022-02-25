const { Drink } = require('../models');

const drinkdata = [
  {
    name: 'Apple Jack',
    image_url: 'placeholder',
    category_id: 1,
    ingredients: "apple juice, vodka",
    glass_type: "coupe",
    instructions: "mix and drink"
  }
];

const seedDrinks = () => Drink.bulkCreate(drinkdata);

module.exports = seedDrinks;