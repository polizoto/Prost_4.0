const { Star } = require('../models');

const starsdata = [
  {
    drink_id: 1,
    user_id: 1
  }
];

const seedStars = () => Star.bulkCreate(starsdata);

module.exports = seedStars;