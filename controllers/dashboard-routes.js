const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Category, User, Star, Comment, Drink } = require('../models');

const starsCount = 1

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.session.user_id
    },
    include: [
      {
        model: Drink,
        attributes: ["id",
        "image_url",
        "name",
        "category_id",
        "ingredients",
        "glass_type",
        "instructions"],
        through: Star,
        as: 'starred_drinks',
      },
    ]
  })
    .then(dbUserData => {
      const user = dbUserData.get({ plain: true });
      console.log(user)
      res.render('dashboard', {
        user,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
});

router.get('/comments', withAuth, (req, res) => {

    const starsCount = 1

    Drink.findAll({
        attributes: [
          "id",
          "image_url",
          "name",
          "category_id",
          "ingredients",
          "glass_type",
          "instructions",
          [ sequelize.literal(
              "(SELECT COUNT(*) FROM comment WHERE comment.drink_id = drink.id)"
            ),
            "comment_count",
          ],
        ],
        having: sequelize.literal(`(comment_count) >= ${starsCount}`),
        order: [[sequelize.literal('comment_count'), 'DESC']],
        include: [
            {
              model: Comment,
              where: {
                // use the ID from the session
                user_id: req.session.user_id
              },
              attributes: ['id', 'comment_text']
            },
          ],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      const myDrinks = dbDrinkData;
      res.render('dashboard-drinks', {
        drinks,
        myDrinks,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;