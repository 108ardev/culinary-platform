const { Client } = require('pg');

const client = new Client({
  user: 'myuser',           // имя пользователя PostgreSQL
  host: '109.73.205.129',        // адрес сервера базы данных
  database: 'culinarydb',   // имя базы данных
  password: 'mypassword',   // пароль пользователя
  port: 5432,               // порт PostgreSQL (по умолчанию 5432)
});

client.connect();

module.exports = client;
