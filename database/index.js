const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

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

const reviewId = getRandomInt(0, 100000);
const restaurantId = getRandomInt(1000, 2000);
const username = generateUsername();
const location = ;
const date = ;
const overallRating = ;
const foodRating = ;
const serviceRating = ;
const ambianceRating = ;
const valueRating = ;
const noiseLevel = ;
const recommended = ;
const body = ;

for (var i = 0; i < 100000; i++) {
  connection.query('INSERT INTO cava.reviews (review_id, restaurant_id, username, location, date, overall_rating, food_rating, service_rating, ambiance_rating, value_rating, noise_level, recommended, body) VALUES (SELECT FLOOR(RAND()*(b-a+1))+a;);', function(err, results, fields) {
    if (err) { throw err; }
    console.log('success');
  });
}

// refactor code so data the following data lives in a separate file
const occasions = [
  'Everyday Dining',
  'Date',
  'Special Occasion',
  'Business Meal',
  'Friends\' Get-Together'
];

const categories = [
  'Special Occasion',
  'Business Meals',
  'Live Music',
  'Good for Groups',
  'Waterfront',
  'Scenic View',
  'Kid-friendly',
  'Afternoon Coffee',
  'Romantic',
  'Good for Anniversaries',
  'Casual',
  'Seasonal',
  'Great for Outdoor Dining',
  'Neighborhood Gem',
  'Late-night Find',
  'Handcrafted Cocktails',
  'Vegan',
  'Healthy',
  'Comfort Food',
  'Disabled Access',
  'Fun',
  'Happy Hour',
  'Bar Seating',
  'Tasting Menu',
  'Quiet Conversation',
  'Authentic',
  'Vibrant Bar Scene',
  'Fit for Foodies',
  'Worth the Drive',
  'Notable Wine List',
  'Quick Bite',
  'Organic',
  'Great for Lunch',
  'Afternoon Tea',
  'Good for Birthdays',
  'Hot Spot',
  'Great for Brunch',
  'Pre/post Theatre',
  'Cozy',
  'Gluten Free Options',
  'Live Sports',
  'People Watching',
  'Creative Cuisine',
  'Spicy',
  'Paleo Friendly',
  'Good for a Date',
  'Local Ingredients',
  'Good Vegetarian Options',
  'Tapas',
  'Sunday Lunch',
  'Great Beer'
];

// add one or more occasions to each review

// add one or more categories to each review

const getAllReviews = function() {
  // TODO: run a query that selects all the information from the reviews table
  console.log('response being sent from reviews endpoint');
  connection.query('SELECT * FROM cava.reviews', callback(error, results, field) {
    if (error) throw error;
    console.log(results);
  })
};

module.exports = {
  getAllReviews,
  categories,
  occasions
};