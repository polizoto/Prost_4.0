const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Category, User, Star, Comment, Drink } = require('../models');

router.get('/', withAuth, (req, res) => {

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
              "(SELECT COUNT(*) FROM star WHERE star.drink_id = drink.id)"
            ),
            "star_count",
          ],
        ],
        having: sequelize.literal(`(star_count) >= ${starsCount}`),
        order: [[sequelize.literal('star_count'), 'DESC']],
        include: [
            {
              model: Star,
              where: {
                // use the ID from the session
                user_id: req.session.user_id
              },
              attributes: ['id']
            },
          ],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('dashboard', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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
      res.render('dashboard-drinks', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;