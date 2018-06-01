const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// function generateUsername() {
//   var text = "";
//   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 5; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// const reviewId = getRandomInt(0, 100000);
// const restaurantId = getRandomInt(1000, 2000);
// const username = generateUsername();
// const date = new Date;
// const overallRating = getRandomInt(1, 5);
// const foodRating = getRandomInt(1, 5);
// const serviceRating = getRandomInt(1, 5);
// const ambianceRating = getRandomInt(1, 5);
// const valueRating = getRandomInt(1, 5);
// const noiseLevel = getRandomInt(1, 4);
// const recommended = Math.random() >= 0.5;
// const body = 'Lorem ipsum dolor sit amet, pri id vide homero alienum, nibh nusquam mel no. Pro perfecto atomorum sapientem cu, elit natum ex eum. Est probo qualisque ut. Quo at congue iriure. Noster mollis nostrud eum ad, nam feugiat debitis ea, autem populo ei vel. Vix dicta labore delenit no. Per vero ludus partem id. Eu rebum putent quo, per quod conclusionemque no. Nam modus nominavi delectus an. Pri rebum detracto ut, ea officiis reprimique quo.';

// const categoryId = getRandomInt(0, 100000);
// const category = getRandomInt(0, 100000);
// const selected = Math.random() >= 0.5;

connection.query('SELECT * FROM cava.reviews', function (error, results, fields) {
  // if (error) {throw error};
  console.log(results);
});

// for (var i = 0; i < 100000; i++) {
//   var insertNewReview = `INSERT INTO cava.reviews (review_id, restaurant_id, username, location, date, overall_rating, food_rating, service_rating, ambiance_rating, value_rating, noise_level, recommended, body) VALUES (${reviewId}, ${restaurantId}, ${username}, ${date}, ${overallRating}, ${foodRating}, ${serviceRating}, ${ambianceRating}, ${valueRating}, ${noiseLevel}, ${recommended}, ${body});`
//   var insertNewReviewCategories = `INSERT INTO cava.categories (review_id, category_id, category, selected) VALUES (${reviewId}, ${categoryId}, ${category}, ${selected})`;
//   connection.query(insertNewReview, function(err, results, fields) {
//     if (err) { console.log("error"); }
//     console.log('success');
//   });
//   // for the number of categories selected
//   // add a new row to the categories table
// }

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

// const getAllReviews = function() {
//   // TODO: run a query that selects all the information from the reviews table
//   console.log('response being sent from reviews endpoint');
//   connection.query('SELECT * FROM cava.reviews', function(error, results, field) {
//     if (error) throw error;
//     console.log(results);
//   });
// };

module.exports = {
  // getAllReviews,
  // categories
};