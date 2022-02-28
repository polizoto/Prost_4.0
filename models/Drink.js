const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model {
  static addStar(body, models) {
    return models.Star.create({
      user_id: body.user_id,
      drink_id: body.drink_id
    }).then(() => {
      return Drink.findOne({
        where: {
          id: body.drink_id
        },
        attributes: [
          'id',
          'image_url',
          'name',
          'category_id',
          'ingredients',
          'glass_type',
          'instructions',
          [sequelize.literal('(SELECT COUNT(*) FROM star WHERE drink.id = star.drink_id)'), 'star_count']
        ],
        include: [
          {
            model: models.Comments,
            attributes: ['id', 'comment_text', 'drink_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

Drink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      },
    },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "category",
          key: "id"
        },
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      glass_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'drink'
  }
);

module.exports = Drink;