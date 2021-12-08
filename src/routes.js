const router = require('express').Router();

const authController = require('./controllers/authController');
const recipesController = require('./controllers/recipesController');

router.use('/auth', authController);
router.use('/recipes', recipesController);

module.exports = router;
