const db = require('../config/db');

const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};

const addUser = async (username, email, password) => {
  const result = await db.query(
    'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
    [username, email, password]
  );
  return result.rows[0];
};

const updateUser = async (id, username, email, password) => {
  const result = await db.query(
    'UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
    [username, email, password, id]
  );
  return result.rows[0];
};

const deleteUser = async (id) => {
  const result = await db.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser };
