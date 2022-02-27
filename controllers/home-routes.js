const router = require('express').Router();
<<<<<<< HEAD

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/favorites', (req, res) => {
  res.render('favorites');
});
=======
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

  // Get all drinks in descending order from number of stars...need to include query to exclude items that are not starred
router.get('/stars', (req, res) => {
    Drink.findAll({
        attributes: [
          "id", "name",
          [ sequelize.literal(
              "(SELECT COUNT(*) FROM star WHERE star.drink_id = drink.id)"
            ),
            "star_count",
          ],
        ],
        order: [[sequelize.literal('star_count'), 'DESC']],
    })
.then(dbStarData => res.json(dbStarData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})
>>>>>>> ec3037db1e7cb3012182bd8f45133d0426b0fcc9


module.exports = router;