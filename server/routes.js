const express = require('express');
const router = express.Router();
const db = require('../database/index.js');

router.get('/clients', (req, res) => {
  db.getAllClients((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

router.get('/products', (req, res) => {
  db.getAllProducts((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;