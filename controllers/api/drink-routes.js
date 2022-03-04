const router = require("express").Router();
const { Drink, Comment, User, Category, Star } = require("../../models");
const withAuth = require("../../utils/auth");
const sequelize = require("../../config/connection");


// find a drink by searched name
// router.get("/:name", (req, res) => {
//   Drink.findAll({
//     where: {
//       name: req.params.name,
//     },
//   })
//   .then((dbDrinkData) => {
      
//     if (!dbDrinkData) {
//       res.status(404).json({ message: "No drink found with this id" });
//       return;
//     }
//     const drinks = dbDrinkData.map(drink => drink.get({ plain: true }));
//     // make an array from string of ingredient items
//     const drinkItems = drinks[0].ingredients.split(',');
//     // make object with separate items from array
//     let ingredients = []
//     function getIngredients(item, index) {
//       let object = { ingredient: index + 1, item: item.trim(), }
//       ingredients[index] = object
//   }
//   drinkItems.forEach((name, index) => getIngredients(name, index));
//     res.render('single-drink', {
//       drinks: drinks[0],
//       ingredients: ingredients,
//       loggedIn: req.session.loggedIn,
//       style: 'single.css'
//     });
//   })
// });


// find drink by id
router.get("/:id", (req, res) => {
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
        model: Star,
        attributes: ["id"],
        include: {
          model: User,
          attributes: ["id", "created_at"],
        }
      }
    ],
    order: [[sequelize.literal('name'), 'ASC']],
  })
    .then((dbDrinkData) => {
      
      if (!dbDrinkData) {
        res.status(404).json({ message: "No drink found with this id" });
        return;
      }
      const drinks = dbDrinkData.get({ plain: true });
      const drinkItems = drinks.ingredients.split(',');

      const starredDrink = drinks.stars[0]
      let ingredients = []
      function getIngredients(item, index) {
        let object = { ingredient: index + 1, item: item.trim(), }
        ingredients[index] = object
    }
    drinkItems.forEach((name, index) => getIngredients(name, index));

    //
      // make an array from string of ingredient items
      const instructionItems = drinks.instructions.split(',');
      // make object with separate items from array
      let instructions = []
      function getInstructions(item, index) {
        let object = { instruction: index + 1, item: item.trim(), }
        instructions[index] = object
    }
    instructionItems.forEach((name, index) => getInstructions(name, index));

    let isStarred
    if (starredDrink) {
      isStarred = true
    } else {
      isStarred = false
    }
      res.json({
        drinks: drinks,
        isStarred: isStarred,
        starredDrink: starredDrink,
        ingredients: ingredients,
        instructions: instructions,
        loggedIn: req.session.loggedIn,
      });
    })
});

// find all drinks
router.get("/", (req, res) => {
  Drink.findAll({
    attributes: [
      "id",
      // "image_url",
      "name",
      // "category_id",
      // "ingredients",
      // "glass_type",
      // "instructions",
      // [
      //   sequelize.literal(
      //     "(SELECT COUNT(*) FROM star WHERE drink.id = star.drink_id)"
      //   ),
      //   "star_count",
      // ],
    ]
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "comment_text", "drink_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   },
    //   {
    //     model: Category,
    //     attributes: ["id", "name"],
    //   },
    // ],
  })
    .then((dbDrinkData) => {
      if (!dbDrinkData) {
        res.status(404).json({ message: "No drink found with this id" });
        return;
      }
      res.json(dbDrinkData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// find starred drinks
router.get("/favorites", (req, res) => {
  Star.findAll({
    attributes: ["id", "user_id"],
    include: [
      {
        model: Drink,
        attributes: [
          "id",
          "name",
          "image_url",
          "ingredients",
          "instructions",
          "glass_type",
        ],
      },
    ],
  })
    .then((dbStarData) => {
      if (!dbStarData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //   const posts = dbPostData.map(post => post.get({ plain: true }));
      //   res.render('favorites',dbPostData);
      res.render("favorites", {
        style: 'style.css'
      });
      // res.json(dbStarData)
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// addStar to Drink

router.post("/addStar", (req, res) => {
  if (req.session) {
    Star.create({
      user_id: req.session.user_id,
      drink_id: req.body.drink_id
    })
      .then((updatedStarData) => res.json(updatedStarData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// addStar to Drink

router.delete("/deleteStar", (req, res) => {
  if (req.session) {
    Star.destroy({
      where: {
        id: req.body.star_id
      }
    })
      .then((updatedStarData) => res.json(updatedStarData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});




module.exports = router;
