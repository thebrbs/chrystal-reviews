require('newrelic');
const bodyParser = require('body-parser');
const db = require('../../database/index.js');
const path = require('path');
const express = require('express');
const redis = require('redis');

const client = redis.createClient();
const app = express();
const port = 8081;

const cache = (req, res, next) => {
  const restaurant = req.params.restaurantId;
  client.get(`restaurant/${restaurant}`, (err, data) => {
    if (err) throw err;
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

app.use(bodyParser.json());

app.use('/restaurant/:restaurantId', express.static(path.resolve(__dirname, '../../client')));

app.get('/restaurant/:restaurantId/reviews', cache, (req, res) => {
  const restaurant = req.params.restaurantId;
  db.getRestaurantReviews(restaurant, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results.rows);
      client.setex(`restaurant/${restaurant}`, 600, JSON.stringify(results.rows));
    }
  });
});

app.post('/restaurant/reviews', (req, res) => {
  db.addReview(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  });
});

app.put('/restaurant/:restaurantId/reviews', (req, res) => {
  db.put(req.params.restaurantId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202);
    }
  });
});

app.delete('/restaurant/:restaurantId/reviews', (req, res) => {
  db.delete(req.params.restaurantId, (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204);
    }
  });
});

client.on('connect', () => console.log('redis connected'));
app.listen(port, () => console.log(`CavaTable is listening on port ${port}`));
