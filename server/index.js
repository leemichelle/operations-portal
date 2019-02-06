const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/clients', (req, res) => {
    db.getAllClients((err, data) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(data);
      }
    });
  });

app.get('/api/products', (req, res) => {
  db.getAllProducts((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});