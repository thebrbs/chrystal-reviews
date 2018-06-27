const pg = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/cava';
const client = new pg.Client(connectionString);
client.connect();

const addReview = (restaurantId, username, date, overall, food, service, ambience, value, noise, recommended, body, callback) => {
  console.log(`successful creation of username: ${username} review for restaurant: ${restaurantId} on db`);
  client.query(`INSERT INTO reviews (restaurant_id,username,date,overall_rating,food_rating,service_rating,ambience_rating,value_rating,noise_level,recommended,body) VALUES (${restaurantId}, ${username}, ${date}, ${overall}, ${food}, ${service}, ${ambience}, ${value}, ${noise}, ${recommended}, ${body})`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const getRestaurantReviews = (restaurantId, callback) => {
  console.log(`successful read of restaurant: ${restaurantId} reviews on db`);
  client.query(`SELECT * FROM reviews WHERE restaurant_id=${restaurantId}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const updateReviewBody = (restaurantId, username, body, callback) => {
  console.log(`successful update of ${username}'s review for restaurant: ${restaurantId} on db`);
  client.query(`UPDATE reviews SET body = ${body} WHERE restaurant_id = ${restaurantId} AND username = ${username}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteRestaurantReviews = (restaurantId, callback) => {
  console.log(`successful deletion of restaurant: ${restaurantId} reviews on db`);
  client.query(`DELETE FROM reviews WHERE restaurant_id=${restaurantId}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteUserReviews = (username, callback) => {
  console.log(`successful deletion of all ${username}'s reviews on db`);
  client.query(`DELETE FROM reviews WHERE username=${username}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getRestaurantReviews,
  addReview,
  updateReviewBody,
  deleteRestaurantReviews,
  deleteUserReviews,
};
