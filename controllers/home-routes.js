const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, User, Star, Comment, Drink } = require('../models');

router.get('/drinks', (req, res) => {
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
        console.log('!!!!!!!!!!!!!!!!!!!!!!!',dbDrinkData);
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
  
        res.render('drinks', {
          drinks,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// if logged in redirect to hompage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});
// find drink by id
router.get("/drink/:id", (req, res) => {
  Drink.findOne({
    where: {
      id: req.params.id,
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
        attributes: ["id", "comment_text", "drink_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbDrinkData) => {
      if (!dbDrinkData) {
        res.status(404).json({ message: "No drink found with this id" });
        return;
      }
    })
});
    
  router.get('/drink/:id', (req, res) => {
    Drink.findOne({
      where: {
        id: req.params.id
      }/*,
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
      ]*/
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/drinks', (req, res) => {
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

      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// find all gin drinks
router.get("/gin", (req, res) => {
    Drink.findAll({
      where: {
        category_id: 1,
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
          attributes: ["id"],
        },
      ],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});
  // find all whiskey drinks
router.get("/whiskey", (req, res) => {
    Drink.findAll({
      where: {
        category_id: 2,
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
          attributes: ["id"],
        },
      ],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});
  // find all tequila drinks
router.get("/tequila", (req, res) => {
    Drink.findAll({
      where: {
        category_id: 3,
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
          attributes: ["id"],
        },
      ],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});
  // find all vodka drinks
router.get("/vodka", (req, res) => {
    Drink.findAll({
      where: {
        category_id: 4,
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
          attributes: ["id"],
        },
      ],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/rum', (req, res) => {
  Drink.findAll({
      where: {
          category_id : 5
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
          attributes: ["id"],
        },
      ],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/brandy', (req, res) => {
  Drink.findAll({
      where: {
          category_id : 6
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
          attributes: ["id"],
        },
      ],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/cordials', (req, res) => {
  Drink.findAll({
      where: {
          category_id : 7
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
          attributes: ["id"],
        },
      ],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // Get all drinks in descending order from number of stars...need to include query to exclude items that are not starred
router.get('/top10', (req, res) => {

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
    })
.then(dbStarData => res.json(dbStarData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})


module.exports = router;
