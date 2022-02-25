const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/favorites', (req, res) => {
  res.render('favorites');
});

module.exports = router;