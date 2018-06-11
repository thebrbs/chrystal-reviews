const port = 3002;
const bodyParser = require('body-parser');
const db = require('../../database/index.js');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '../../../client')));

app.get('/reviews', (req, res) => {
  db.getAllReviews((err, results) => {
    if (err) {res.status(500).send(err)}
    else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`CavaTable is listening on port ${port}`));