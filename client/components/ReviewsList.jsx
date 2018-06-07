import React from 'react';
import ReactDOM from 'react-dom';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div><ReviewListEntry/></div>
    );
  }
}

export default ReviewsList;