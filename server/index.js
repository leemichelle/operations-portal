const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});