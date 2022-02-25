// import all models
const Category = require('./Category');
const Drink = require('./Drink');
const User = require('./User');
const Star = require('./Star');
const Comment = require('./Comment');

Drink.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Drink, {
  through: Star,
  as: 'starred_drinks',
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Drink.belongsToMany(User, {
  through: Star,
  as: 'starred_drinks',
  foreignKey: 'drink_id',
  onDelete: 'SET NULL'
});

Star.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Star.belongsTo(Drink, {
  foreignKey: 'drink_id',
  onDelete: 'SET NULL'
});

User.hasMany(Star, {
  foreignKey: 'user_id'
});

Drink.hasMany(Star, {
  foreignKey: 'drink_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Drink, {
  foreignKey: 'drink_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Drink.hasMany(Comment, {
  foreignKey: 'drink_id'
});

module.exports = { User, Drink, Star, Comment, Category };