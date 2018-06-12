import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';

const Summary = props => (
  <div class="summary">
    <div><h2>Overall ratings and reviews</h2></div>
    <div>Reviews can only be made by people who have eaten at this restaurant</div>
    <div class="starRating">  
      <StarRatings
        rating={Number(props.restaurant.overallRating)}
        starRatedColor="red"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="1px"
      /> {props.restaurant.overallRating} based on recent ratings
    </div>
    <div class="overallRating">
      <div id="subRating">
          <p id="subrating">{props.restaurant.foodRating}</p>
        <p>Food</p>
      </div>
      <div id="subRating">
        <p id="subrating">{props.restaurant.serviceRating}</p>
        <p>Service</p>
      </div>
      <div id="subRating">
        <p id="subrating">{props.restaurant.ambienceRating}</p>
        <p>Ambience</p>
      </div>
      <div id="subRating">
        <p id="subrating">{props.restaurant.valueRating}</p>
        <p>Value</p>
      </div>
    </div>
    <div id="noise">Noise: {props.restaurant.noiseLevel}</div>
    <div id="recommended">{props.restaurant.recommended} % of people would recommend it to a friend</div>
  </div>
);

export default Summary;