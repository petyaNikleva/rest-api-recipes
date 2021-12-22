const router = require('express').Router();

const recipesService = require('../services/recipesService');
const { isAuth, auth } = require('../middlewares/authMiddleware');

router.get('/', async (req, res) => {
    if (req.query.ownerId) {
        let recipes = await recipesService.getOwn(req.query.ownerId);
        res.json(recipes);
    } else {
        let recipes = await recipesService.getAll();
        res.json(recipes);
    }
});

router.get('/:recipeId', async (req, res) => {
    let recipe = await recipesService.getOne(req.params.recipeId);

    res.json(recipe);
})

router.post('/', auth, async (req, res) => {
   
    let recipe = await recipesService.create({...req.body, likes: [], _ownerId: req.user._id});

    res.json(recipe);
});

router.put('/:recipeId', auth, async (req, res) => {

    let recipe = await recipesService.update(req.params.recipeId, req.body);
    //console.log(recipe)
     res.json(recipe);
});


router.delete('/:recipeId', async (req, res) => {
    await recipesService.delete(req.params.recipeId);

    res.json({ok: true});
});

module.exports = router;