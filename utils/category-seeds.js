const { Category } = require('../models');

const categoriesdata = [
  {
    id: 1,
    name: 'Whiskey'
  }
];

const seedCategories = () => Category.bulkCreate(categoriesdata);

module.exports = seedCategories;