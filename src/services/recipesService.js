const Recipe = require('../models/Recipe');

exports.getAll = () => Recipe.find();

exports.getOne = (id) => Recipe.findById(id);

exports.getOwn = (userId) => Recipe.find({_ownerId: userId});

exports.create = (RecipeData) => Recipe.create(RecipeData);

exports.update = (id, RecipeData) => Recipe.findByIdAndUpdate(id, RecipeData);

exports.delete = (id) => Recipe.findByIdAndDelete(id);