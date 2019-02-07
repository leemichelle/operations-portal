const express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3003;
const router = require('./routes.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});