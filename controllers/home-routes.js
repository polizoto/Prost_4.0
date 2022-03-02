const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, User, Star, Comment, Drink } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', { 
    loggedIn: req.session.loggedIn, 
    style: 'style.css'
  });
})

router.get('/dashboard', (req, res) => {
  res.render('/dashboard');
})
// find drink by id
router.get("/drink/:id", (req, res) => {
  Drink.findAll({
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
      }
    ],
    order: [[sequelize.literal('name'), 'ASC']],
  })
    .then((dbDrinkData) => {
      
      if (!dbDrinkData) {
        res.status(404).json({ message: "No drink found with this id" });
        return;
      }
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      // make an array from string of ingredient items
      const drinkItems = drinks[0].ingredients.split(',');
      // make object with separate items from array
      let ingredients = []
      function getIngredients(item, index) {
        let object = { ingredient: index + 1, item: item.trim(), }
        ingredients[index] = object
    }
    drinkItems.forEach((name, index) => getIngredients(name, index));

    //
      // make an array from string of ingredient items
      const instructionItems = drinks[0].instructions.split(',');
      // make object with separate items from array
      let instructions = []
      function getInstructions(item, index) {
        let object = { instruction: index + 1, item: item.trim(), }
        instructions[index] = object
    }
    instructionItems.forEach((name, index) => getInstructions(name, index));
    //
      res.render('single-drink', {
        drinks: drinks[0],
        ingredients: ingredients,
        instructions: instructions,
        loggedIn: req.session.loggedIn,
        style: 'single.css'
      });
    })
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
        order: [[sequelize.literal('name'), 'ASC']],
      })
      .then(dbDrinkData => {
        const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
        res.render('drinks', {
          drinks,
          loggedIn: req.session.loggedIn,
          style: 'style.css'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
});

// if logged in redirect to hompage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
          style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
          style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
          style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
      .then((dbDrinkData) => {
        const drinks = dbDrinkData.map((drink) => drink.get({ plain: true }));
        res.render("drinks", {
          drinks,
          loggedIn: req.session.loggedIn,
          style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
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
      order: [[sequelize.literal('name'), 'ASC']],
    })
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
        loggedIn: req.session.loggedIn,
        style: 'style.css'
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
    .then(dbDrinkData => {
      const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
      res.render('drinks', {
        drinks,
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