import React from 'react';
import ReactDOM from 'react-dom';

const ReviewToolbar = (props) => (
  <div>
    <p>Sort by</p>
    <div className="reviewSortBy">Drop Down Toolbar to sort by rating or date</div>
    <div className="reviewfilterBy">Filter by different keywords - stretch feature</div>
  </div>
);

export default ReviewToolbar;