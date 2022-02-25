const router = require("express").Router();
const { Drink, Comment, User } = require("../../models");

// find all drinks
router.get("/", (req, res) => {
  Drink.findAll({})
    .then(dbDrinkData => {
        if (!dbDrinkData) {
          res.status(404).json({ message: 'No drink found with this id' });
          return;
        }
        res.json(dbDrinkData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// find a drink by searched name
router.get("/:name", (req,res)=> {
    Drink.findAll({
        where: {
            name: req.params.name
        }
    })
    .then(dbDrinkData => {
        if (!dbDrinkData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbDrinkData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
} )

// find a drink by category name- still brainstorming this one


module.exports = router
