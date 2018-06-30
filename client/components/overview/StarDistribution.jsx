import React from 'react';

const StarDistribution = (props) => {
  const starPercentage = [
    (props.restaurant.fiveStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.fourStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.threeStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.twoStarReviews / props.restaurant.totalReviews) * 100,
    (props.restaurant.oneStarReviews / props.restaurant.totalReviews) * 100,
  ];
  return (
    <div className="starDistribution">
      <ul>
        {starPercentage.map((stars, i) => (
          <li className="reviewUpdateParameter" key={i}>
            <span className="starValue">{5 - i}</span>
            <div className="starBar">
              <progress value={stars} max="100">50 %</progress>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarDistribution;
