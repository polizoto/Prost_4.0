const router = require('express').Router();

const userRoutes = require('./user-routes');
const drinkRoutes = require('./drink-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/drinks', drinkRoutes);
router.use('/comments', commentRoutes);

module.exports = router;