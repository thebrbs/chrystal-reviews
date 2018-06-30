const overallRating = data => ((data.map(review => review.overall_rating).reduce((a, b) => a + b)) / data.length).toFixed(1);

const foodRating = data => ((data.map(review => review.food_rating).reduce((a, b) => a + b)) / data.length).toFixed(1);

const serviceRating = data => ((data.map(review => review.service_rating).reduce((a, b) => a + b)) / data.length).toFixed(1);

const ambienceRating = data => ((data.map(review => review.ambience_rating).reduce((a, b) => a + b)) / data.length).toFixed(1);

const valueRating = data => ((data.map(review => review.value_rating).reduce((a, b) => a + b)) / data.length).toFixed(1);

const noise = data => Math.round(((data.map(review => review.noise_level).reduce((a, b) => a + b)) / data.length));

const noiseLevel = (noise) => {
  let noiseLevelInWords;
  if (noise === 1) {
    noiseLevelInWords = 'Do Not Recall';
  } else if (noise === 2) {
    noiseLevelInWords = 'Quiet';
  } else if (noise === 3) {
    noiseLevelInWords = 'Moderate';
  } else if (noise === 4) {
    noiseLevelInWords = 'Energetic';
  }
  return noiseLevelInWords;
};

const recommended = (data) => {
  let recommended = 0;
  for (let i = 0; i < data.length; i++) {
    recommended += data[i].recommended;
  }
  return ((recommended / data.length) * 100).toFixed(1);
};

const fiveStarReviews = data => data.filter(review => review.overall_rating === 5).length;

const fourStarReviews = data => data.filter(review => review.overall_rating === 4).length;


const threeStarReviews = data => data.filter(review => review.overall_rating === 3).length;


const twoStarReviews = data => data.filter(review => review.overall_rating === 2).length;


const oneStarReviews = data => data.filter(review => review.overall_rating === 1).length;


module.exports = {
  overallRating,
  foodRating,
  serviceRating,
  ambienceRating,
  valueRating,
  noise,
  noiseLevel,
  recommended,
  fiveStarReviews,
  fourStarReviews,
  threeStarReviews,
  twoStarReviews,
  oneStarReviews,
};

const overview = module.exports;
export default overview;
