const seedUsers = require ('./user-seeds');
const seedComments = require('./comment-seeds');
const seedDrinks = require ('./drinks-seeds');
const seedStars = require ('./star-seeds');
const seedCategories = require ('./category-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: false });
     //console.log('--------------');

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
    
  };
  
   //seedAll();

  module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
      ).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
          return `${word}s`;
        }
        return word;
      },

    }