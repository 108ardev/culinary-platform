const db = require('../config/db');

const getAllRecipes = async () => {
  const result = await db.query('SELECT * FROM recipes');
  return result.rows;
};

const getRecipeById = async (id) => {
  const result = await db.query('SELECT * FROM recipes WHERE id = $1', [id]);
  return result.rows[0];
};

const addRecipe = async (title, description, ingredients, instructions, chef_id) => {
  const result = await db.query(
    'INSERT INTO recipes (title, description, ingredients, instructions, chef_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, ingredients, instructions, chef_id]
  );
  return result.rows[0];
};

const updateRecipe = async (id, title, description, ingredients, instructions, chef_id) => {
  const result = await db.query(
    'UPDATE recipes SET title = $1, description = $2, ingredients = $3, instructions = $4, chef_id = $5 WHERE id = $6 RETURNING *',
    [title, description, ingredients, instructions, chef_id, id]
  );
  return result.rows[0];
};

const deleteRecipe = async (id) => {
  const result = await db.query(
    'DELETE FROM recipes WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = { getAllRecipes, getRecipeById, addRecipe, updateRecipe, deleteRecipe };
