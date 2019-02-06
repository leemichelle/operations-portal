const {Client} = require('pg');
const _ = require('underscore');

const client = new Client({
  user: 'leemur',
  host: 'localhost',
  database: 'operations',
  port: 5432
});

client.connect();