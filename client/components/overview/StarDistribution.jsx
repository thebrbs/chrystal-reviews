import React from 'react';
import ReactDOM from 'react-dom';
import overview from './helperFunctions.jsx';

const StarDistribution = props => {
  const starPercentage = [
    (props.restaurant.fiveStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.fourStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.threeStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.twoStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.oneStarReviews / props.restaurant.totalReviews) * 100
  ];
  return (
  <div class="starDistribution">
    <ul>
      {starPercentage.map((stars, i) => {
        return (<li class="reviewUpdateParameter">
          <span class="starValue">{5 - i}</span>
          <div class="starBar">
            <progress value={stars} max="100">50 %</progress>
          </div>
        </li>)
      }
      )}
    </ul>
  </div>
);}

export default StarDistribution;