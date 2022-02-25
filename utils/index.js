const seedUsers = require ('./user-seeds');
const seedComments = require('./comment-seeds');
const seedDrinks = require ('./drinks-seeds');
const seedStars = require ('./star-seeds');
const seedCategories = require ('./category-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedCategories();
    console.log('--------------');

    await seedUsers();
    console.log('--------------');
  
    await seedDrinks();
    console.log('--------------');
  
    await seedComments();
    console.log('--------------');
  
    await seedStars();
    console.log('--------------');
    process.exit(0);
  };
  
  seedAll();