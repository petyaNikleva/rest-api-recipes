const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    type: String,
    img: String,
    difficulty: String,
    description: String,
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;