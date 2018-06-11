import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';

const ReviewListEntry = props => (
  <div className="reviewListEntry">
    <div>Diner info here</div>
      <div className="profilePhoto"></div>
      <div className="dinerInfo">
        <div>OpenTable Diner {props.review.username} location</div>
        <div>
          <StarRatings
            rating={Number(props.review.overall_rating)}
            starRatedColor="red"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
        </div>
        <div>{props.review.overall_rating}</div>
        <div>{props.review.date}</div>
        <div>{props.review.body}</div>
        <a>+ Read More</a>
        <a><div><i></i>Report</div></a>
        <a><div><i></i>Helpful</div></a>
        <hr></hr>
      </div>
  </div>
);

export default ReviewListEntry;