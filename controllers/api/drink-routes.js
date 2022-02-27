const router = require("express").Router();
const { Drink, Comment, User, Category, Star } = require("../../models");
const withAuth = require("../../utils/auth");
const sequelize = require("../../config/connection");

// find a drink by searched name
router.get("/:name", (req, res) => {
  Drink.findAll({
    where: {
      name: req.params.name,
    },
  })
    .then((dbDrinkData) => {
      if (!dbDrinkData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbDrinkData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
// find all drinks
router.get("/", (req, res) => {
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
        attributes: ["id", "name"],
      },
    ],
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
// addStar to Drink
router.put("/addStar", withAuth, (req, res) => {
  if (req.session) {
    Drink.addStar(
      { ...req.body, user_id: req.session.user_id },
      { Star, Comment, User }
    )
      .then((updatedStarData) => res.json(updatedStarData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});
// find starred drinks
router.get("/favorites", (req, res) => {
  Star.findAll({
      attributes: [
          "id",
          "user_id"
      ],
        include: [
          {
            model: Drink,
            attributes: ["id", 'name', 'image_url','ingredients','instructions', 'glass_type' ],
          }]
  })
    .then(dbStarData => {
        if (!dbStarData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
      //   const posts = dbPostData.map(post => post.get({ plain: true }));
      //   res.render('favorites',dbPostData);
      res.render("favorites");
      // res.json(dbStarData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;

