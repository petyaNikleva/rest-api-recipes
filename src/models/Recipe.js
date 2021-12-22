const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        requered: true
    },
    type: {
        type: String,
        requered: true,
        enum: ['Супи', 'Аламинути', 'Основни', 'Десерти'],
    },
    img: {
        type: String,
        requered: true
    },
    difficulty: {
        type: String,
        requered: true,
        enum: ['Трудно', 'Лесно']
    },
    description: {
        type: String,
        requered: true
    },
    likes: [],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;