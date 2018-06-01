const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllReviews = function() {
  console.log('response being sent from reviews endpoint');
  connection.query('SELECT * FROM cava.reviews', function(error, results, field) {
    if (error) {throw error;}
    console.log(results);
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function generateUsername() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


// const categoryId = getRandomInt(0, 100000);
// const category = getRandomInt(0, 100000);
// const selected = Math.random() >= 0.5;

for (var i = 0; i < 10; i++) {
  let restaurantId = getRandomInt(1001, 1100);
  let username = generateUsername();
  let date = JSON.stringify(new Date);
  let overallRating = getRandomInt(1, 5);
  let foodRating = getRandomInt(1, 5);
  let serviceRating = getRandomInt(1, 5);
  let ambianceRating = getRandomInt(1, 5);
  let valueRating = getRandomInt(1, 5);
  let noiseLevel = getRandomInt(1, 4);
  let recommended = Math.random() >= 0.5;
  let body = 'Lorem ipsum dolor sit amet, pri id vide homero alienum, nibh nusquam mel no. Pro perfecto atomorum sapientem cu, elit natum ex eum. Est probo qualisque ut. Quo at congue iriure.';
  // need to add date back into this query
  var insertNewReview = `INSERT INTO cava.reviews (restaurant_id, username, date, overall_rating, food_rating, service_rating, ambiance_rating, value_rating, noise_level, recommended, body) VALUES (${restaurantId}, '${username}', ${date}, ${overallRating}, ${foodRating}, ${serviceRating}, ${ambianceRating}, ${valueRating}, ${noiseLevel}, ${recommended}, '${body}');`

  connection.query(insertNewReview, function(err, results, fields) {
    if (err) { throw err; }
    console.log(results);
  });
//   // for the number of categories selected
//   // add a new row to the categories table
}

getAllReviews();

// refactor code so data the following data lives in a separate file

// const categories = [
//   'Special Occasion',
//   'Business Meals',
//   'Live Music',
//   'Good for Groups',
//   'Waterfront',
//   'Scenic View',
//   'Kid-friendly',
//   'Afternoon Coffee',
//   'Romantic',
//   'Good for Anniversaries',
//   'Casual',
//   'Seasonal',
//   'Great for Outdoor Dining',
//   'Neighborhood Gem',
//   'Late-night Find',
//   'Handcrafted Cocktails',
//   'Vegan',
//   'Healthy',
//   'Comfort Food',
//   'Disabled Access',
//   'Fun',
//   'Happy Hour',
//   'Bar Seating',
//   'Tasting Menu',
//   'Quiet Conversation',
//   'Authentic',
//   'Vibrant Bar Scene',
//   'Fit for Foodies',
//   'Worth the Drive',
//   'Notable Wine List',
//   'Quick Bite',
//   'Organic',
//   'Great for Lunch',
//   'Afternoon Tea',
//   'Good for Birthdays',
//   'Hot Spot',
//   'Great for Brunch',
//   'Pre/post Theatre',
//   'Cozy',
//   'Gluten Free Options',
//   'Live Sports',
//   'People Watching',
//   'Creative Cuisine',
//   'Spicy',
//   'Paleo Friendly',
//   'Good for a Date',
//   'Local Ingredients',
//   'Good Vegetarian Options',
//   'Tapas',
//   'Sunday Lunch',
//   'Great Beer'
// ];

// add one or more occasions to each review

// add one or more categories to each review

module.exports = {
  getAllReviews
  // categories
};