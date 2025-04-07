// controllers/groceryListController.js
const recipeModel = require('../models/recipeModel');

const generateGroceryList = async (req, res) => {
  const { recipe_id } = req.body;
  if (!recipe_id) {
    return res.status(400).json({ message: 'recipe_id не указан' });
  }
  try {
    const recipe = await recipeModel.getRecipeById(recipe_id);
    if (!recipe) {
      return res.status(404).json({ message: 'Рецепт не найден' });
    }
    // Предполагаем, что ингредиенты хранятся в виде строки, разделённой запятыми
    const ingredients = recipe.ingredients.split(',').map(item => item.trim());
    res.status(200).json({ groceryList: ingredients });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = { generateGroceryList };
