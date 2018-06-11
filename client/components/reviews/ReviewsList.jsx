import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewToolbar from './ReviewToolbar.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews : []
    }

    this.displayAllReviews = this.displayAllReviews.bind(this);
  }

  componentDidMount() {
    this.displayAllReviews();
  }

  displayAllReviews() {
  axios.get('/reviews')
    .then( response => {
      this.setState({
        reviews : response.data.slice(0, 40)
      });
    })
    .catch( error => {
      console.log(error);
    }) 
  }

  render() {
    return (
      <div>
        <p>ReviewsList is rendering</p>
        <ReviewToolbar/>
        {this.state.reviews.map((review) => <ReviewListEntry review={review}/>)}
      </div>
    );
  }
}

export default ReviewsList;