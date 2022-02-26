const { User } = require('../models');

const userdata = [
  {
    username: "lwofford",
    email: "luke@gmail.com",
    password: "password123"
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;