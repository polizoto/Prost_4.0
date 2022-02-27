const { Drink,Comment, Star, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
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
        // res.render("favorites");
        res.json(dbStarData)
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });


// router.get("/favorites", (req, res) => {

//   res.render("favorites");
// });
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.post("/login", (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: "No user with that email address!" });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: "Incorrect password!" });
        return;
      }
  
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    });
  });
module.exports = router;
