const recipeModel = require('../models/recipeModel');

const getRecipes = async (req, res) => {
  try {
    const recipes = await recipeModel.getAllRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, chef_id } = req.body;
  try {
    const newRecipe = await recipeModel.addRecipe(title, description, ingredients, instructions, chef_id);
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { title, description, ingredients, instructions, chef_id } = req.body;
  try {
    const updatedRecipe = await recipeModel.updateRecipe(id, title, description, ingredients, instructions, chef_id);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRecipe = await recipeModel.deleteRecipe(id);
    res.status(200).json(deletedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { getRecipes, createRecipe, updateRecipe, deleteRecipe };
