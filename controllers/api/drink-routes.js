const router = require("express").Router();
const { Drink, Comment, User, Category } = require("../../models");;
const sequelize = require('../../config/connection');


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
// find a all drinks 
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
          "(SELECT COUNT(*) FROM stars WHERE drink.id = stars.drink_id)"
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
          attributes: ["first_name", "last_name"],
        },
      },
      {
        model: Category,
        attributes: ["id", "name"]
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


module.exports = router;
