import React from 'react';
import ReactDOM from 'react-dom';
import ReviewToolbar from './ReviewToolbar.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>ReviewsList is rendering</p>
        <ReviewToolbar/>
        <ReviewListEntry/>
      </div>
    );
  }
}

export default ReviewsList;