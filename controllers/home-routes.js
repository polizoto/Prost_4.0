const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, User, Star, Comment, Drink } = require('../models');

router.get('/', (req, res) => {
    Drink.findAll({
        attributes: [
          "id",
          "image_url",
          "name",
          "category_id",
          "ingredients",
          "glass_type",
          "instructions",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM star WHERE drink.id = star.drink_id)"
            ),
            "star_count",
          ],
        ],
        include: [
          {
            model: Comment,
            attributes: ["id", "comment_text", "drink_id", "user_id", "created_at"],
            include: {
              model: User,
              attributes: ["username"],
            },
          },
          {
            model: Category,
            attributes: ["id", "name"]
          },
        ],
      })
      .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('homepage', {
          drinks,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    
      res.render('login');
  });

  router.get('/drink/:id', (req, res) => {
    Drink.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        "id",
        "image_url",
        "name",
        "category_id",
        "ingredients",
        "glass_type",
        "instructions",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM star WHERE drink.id = star.drink_id)"
          ),
          "star_count",
        ],
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'drink_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbDrinkData => {
        if (!dbDrinkData) {
          res.status(404).json({ message: 'No drink found with this id' });
          return;
        }
  
        const drink = dbDrinkData.get({ plain: true });

        res.render('single-drink', {
          drink,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/stars', (req, res) => {
    Star.findAll({
      attributes: [
        "id", "drink_id"],
// Need to adjust logic to find UNIQUE count of stars
    })
      .then(dbStarData => res.json(dbStarData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;