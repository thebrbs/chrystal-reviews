import React from 'react';
import ReactDOM from 'react-dom';

const Summary = (props) => (
  <div>
    <div><h2>Overall ratings and reviews</h2></div>
    <div>Reviews can only be made by people who have eaten at this restaurant</div>
    <div>{props.restaurant.overallRating} based on recent ratings</div>
    <div>Individual Ratings here</div>
      <div>{props.restaurant.foodRating} Food</div>
      <div>{props.restaurant.serviceRating} Service</div>
      <div>{props.restaurant.ambienceRating} Ambience</div>
      <div>{props.restaurant.valueRating} Value</div>
    <div>Noise: {props.restaurant.noiseLevel}</div>
    <div>{props.restaurant.recommended} % of people would recommend it to a friend</div>
  </div>
);

export default Summary;