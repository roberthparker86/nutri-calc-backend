const createRecipe = require('./createCtrl');
const updateRecipe = require('./updateCtrl');
const deleteRecipe = require('./deleteCtrl');
const getRecipeById = require('./getById');
const getRecipes = require('./getRecipes');

module.exports = {
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeById,
    getRecipes
};