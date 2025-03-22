const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Route pour rechercher des recettes
router.get('/search', recipeController.searchRecipes);

// Route pour filtrer par origine
router.get('/origin/:origin', recipeController.getRecipesByOrigin);

// Routes CRUD principales
router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;