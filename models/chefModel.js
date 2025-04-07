const db = require('../config/db');

const getAllChefs = async () => {
  const result = await db.query('SELECT * FROM chefs');
  return result.rows;
};

const addChef = async (name, bio, rating) => {
  const result = await db.query(
    'INSERT INTO chefs (name, bio, rating) VALUES ($1, $2, $3) RETURNING *',
    [name, bio, rating]
  );
  return result.rows[0];
};

const updateChef = async (id, name, bio, rating) => {
  const result = await db.query(
    'UPDATE chefs SET name = $1, bio = $2, rating = $3 WHERE id = $4 RETURNING *',
    [name, bio, rating, id]
  );
  return result.rows[0];
};

const deleteChef = async (id) => {
  const result = await db.query(
    'DELETE FROM chefs WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = { getAllChefs, addChef, updateChef, deleteChef };
