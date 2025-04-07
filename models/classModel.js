const db = require('../config/db');

const getAllClasses = async () => {
  const result = await db.query('SELECT * FROM classes');
  return result.rows;
};

const addClass = async (recipe_id, chef_id, scheduled_date, duration, location) => {
  const result = await db.query(
    'INSERT INTO classes (recipe_id, chef_id, scheduled_date, duration, location) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [recipe_id, chef_id, scheduled_date, duration, location]
  );
  return result.rows[0];
};

const updateClass = async (id, recipe_id, chef_id, scheduled_date, duration, location) => {
  const result = await db.query(
    'UPDATE classes SET recipe_id = $1, chef_id = $2, scheduled_date = $3, duration = $4, location = $5 WHERE id = $6 RETURNING *',
    [recipe_id, chef_id, scheduled_date, duration, location, id]
  );
  return result.rows[0];
};

const deleteClass = async (id) => {
  const result = await db.query(
    'DELETE FROM classes WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = { getAllClasses, addClass, updateClass, deleteClass };
