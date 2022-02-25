const { User } = require('../models');

const userdata = [
  {
    first_name:"luke",
    last_name: "wofford",
    email:"luke@gmail.com",
    password:"password123"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;