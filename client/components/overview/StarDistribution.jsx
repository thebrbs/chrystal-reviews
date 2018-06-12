import React from 'react';
import ReactDOM from 'react-dom';
import overview from './helperFunctions.jsx';

const StarDistribution = props => (
  <div class="starDistribution">
    <ul>
      <li class="reviewUpdateParameter">
        <span class="starValue">5</span>
        <div class="starBar">
          <div id="fiveStars"></div>
        </div>
      </li>
      <li class="reviewUpdateParameter">
        <span class="starValue">4</span>
        <div class="starBar">
          <div id="fourStars"></div>
        </div>
      </li>
      <li class="reviewUpdateParameter">
        <span class="starValue">3</span>
        <div class="starBar">
          <div id="threeStars"></div>
        </div>
      </li>
      <li class="reviewUpdateParameter">
        <span class="starValue">2</span>
        <div class="starBar">
          <div id="twoStars"></div>
        </div>
      </li>
      <li class="reviewUpdateParameter">
        <span class="starValue">1</span>
        <div class="starBar">
          <div id="oneStar"></div>
        </div>
      </li>
    </ul>
  </div>
);

export default StarDistribution;