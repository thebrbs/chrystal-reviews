const { Pool } = require('pg');

const pool = new Pool({ database: 'cava' });

const addReview = (params, callback) => {
  const q = 'INSERT INTO reviews (restaurant_id,username,date,overall_rating,food_rating,service_rating,ambience_rating,value_rating,noise_level,recommended,body) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
  pool.query(q, [params.restaurant_id, params.username, params.date, params.overall_rating, params.food_rating, params.service_rating, params.ambience_rating, params.value_rating, params.noise_level, params.recommended, params.body], (error, results) => {
    if (error) {
      console.log(error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const getRestaurantReviews = (restaurantId, callback) => {
  pool.query(`SELECT * FROM reviews WHERE restaurant_id=${restaurantId}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const updateReviewBody = (restaurantId, username, body, callback) => {
  console.log(`successful update of ${username}'s review for restaurant: ${restaurantId} on db`);
  pool.query(`UPDATE reviews SET body = ${body} WHERE restaurant_id = ${restaurantId} AND username = ${username}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteRestaurantReviews = (restaurantId, callback) => {
  console.log(`successful deletion of restaurant: ${restaurantId} reviews on db`);
  pool.query(`DELETE FROM reviews WHERE restaurant_id=${restaurantId}`, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteUserReviews = (username, callback) => {
  console.log(`successful deletion of all ${username}'s reviews on db`);
  pool.query(`DELETE FROM reviews WHERE username=${username}`, (error, results) => {
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
