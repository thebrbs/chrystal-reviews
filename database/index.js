const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const generateData = require('./generateData.js');
const connection = mysql.createConnection(mysqlConfig);

for (let i = 1; i < 10; i++) {
  let insertNewReview = `INSERT INTO reviews (restaurant_id, username, date, overall_rating, food_rating, service_rating, ambiance_rating, value_rating, noise_level, recommended, body) VALUES (${generateData.restaurantId(1001, 1100)}, '${generateData.username()}', '${generateData.date()}', ${generateData.overallRating(1, 5)}, ${generateData.foodRating(1, 5)}, ${generateData.serviceRating(1, 5)}, ${generateData.ambianceRating(1, 5)}, ${generateData.valueRating(1, 5)}, ${generateData.noiseLevel(1, 4)}, ${generateData.recommended}, '${generateData.body}');`

  connection.query(insertNewReview, function(err, results, fields) {
    if (err) { throw err; }
  });
  
  let numberOfCategoriesSelected = generateData.generateRandomInt(1, 51);
  for (let k = 0; k < numberOfCategoriesSelected; k++) {
    let categoryCopy = generateData.categories.slice(0);
    let rowCategory = categoryCopy.splice(generateData.generateRandomInt(0, categoryCopy.length), 1)
    connection.query(`INSERT INTO review_categories (reviews_id, category, selected) VALUES (${i}, '${rowCategory}', true)`);
  }
}

const getAllReviews = function(callback) {
  console.log('response being sent from reviews endpoint');
  connection.query('SELECT * FROM reviews', function(error, results) {
    if (error) {callback(error, null)}
    else {callback(null, results)}
  });
};

module.exports = {
  getAllReviews
};