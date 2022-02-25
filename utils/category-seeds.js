const { Category } = require('../models');

const categoriesdata = [
  {
    name: 'Gin'
  },
  {
    name: 'Whiskey'
  },
  {
    name: 'Tequila'
  },
  {
    name: 'Vodka'
  },
  {
    name: 'Rum'
  },
  {
    name: 'Brandy'
  },
  {
    name: 'Cordials & Liqueurs'
  },
];

const seedCategories = () => Category.bulkCreate(categoriesdata);

module.exports = seedCategories;