const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Star extends Model {}

Star.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    drink_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'drink',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'star'
  }
);

module.exports = Star;
