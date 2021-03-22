const express = require('express');

const recipeCtrl = require('../controllers/index.js');
const { createRecipe, updateRecipe, deleteRecipe, getRecipeById, getRecipes } = recipeCtrl;

const router = express.Router();

router.post('/recipe', createRecipe);
router.put('/recipe/:id', updateRecipe);
router.delete('/recipe/:id', deleteRecipe);
router.get('/recipe/:id', getRecipeById);
router.get('/recipes', getRecipes);

module.exports = router;