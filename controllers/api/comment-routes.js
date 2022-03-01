const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Comment } = require("../../models");

// create comment
router.post("/", (req,res) => {

    console.log (req.session)
    if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        drink_id: req.body.drink_id
    })
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}
})
// delete comment
router.delete("/:id", (req,res)=> {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbCommentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// find all comments
router.get("/", (req,res)=> {
    Comment.findAll({})
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
// find comment by id
router.get("/:id", (req,res)=> {
    Comment.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(commentData => {
        res.json(commentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})
module.exports = router