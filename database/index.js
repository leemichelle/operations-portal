const {Client} = require('pg');
const _ = require('underscore');

const client = new Client({
  user: 'leemur',
  host: 'localhost',
  database: 'operations',
  port: 5432
});

client.connect();

let getAllClients = (callback) => {
  client.query('SELECT * FROM clients', (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

let getAllProducts = (callback) => {
  client.query('SELECT * FROM products', (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAllClients,
  getAllProducts
};