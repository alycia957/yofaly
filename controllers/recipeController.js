const Recipe = require('../models/recipes');

// Récupérer toutes les recettes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer une recette par ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ id: req.params.id });
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Créer une nouvelle recette
exports.createRecipe = async (req, res) => {
  try {
    // Générer un ID automatique
    const lastRecipe = await Recipe.findOne().sort({ id: -1 });
    const newId = lastRecipe ? lastRecipe.id + 1 : 1;
    
    const recipeData = {
      ...req.body,
      id: newId
    };
    
    const newRecipe = new Recipe(recipeData);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mettre à jour une recette
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer une recette
exports.deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({ id: req.params.id });
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.status(200).json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Filtrer les recettes par origine
exports.getRecipesByOrigin = async (req, res) => {
  try {
    const recipes = await Recipe.find({ origins: req.params.origin });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Rechercher des recettes
exports.searchRecipes = async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ message: 'Paramètre de recherche manquant' });
    }
    
    const recipes = await Recipe.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });
    
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};