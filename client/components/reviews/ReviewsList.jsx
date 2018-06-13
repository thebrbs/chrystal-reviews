import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewToolbar from './ReviewToolbar.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews : [],
      visibleReviews : []
    }

    this.start = 0;
    this.end = 40;

    this.displayAllReviews = this.displayAllReviews.bind(this);
    this.displayNextReviews = this.displayNextReviews.bind(this);
    this.displayPreviousReviews = this.displayPreviousReviews.bind(this);
  }

  componentDidMount() {
    this.displayAllReviews();
  }

  displayAllReviews() {
  axios.get('/restaurant/1025/reviews')
    .then( response => {
      this.setState({
        reviews: response.data,
        visibleReviews : response.data.slice(this.start, this.end)
      });
    })
    .catch( error => {
      console.log(error);
    }) 
  }

  displayNextReviews() {
    if (this.start <= this.state.reviews.length) {
      this.start += 40;
      this.end += 40;
    }

    this.setState({
      visibleReviews : this.state.reviews.slice(this.start, this.end)
    });
  }

  displayPreviousReviews() {
    if (this.start >= 40) {
      this.start -= 40;
      this.end -= 40;
    }

    this.setState({
      visibleReviews : this.state.reviews.slice(this.start, this.end)
    });
  }

  render() {
    return (
      <div class="reviewsList">
      <hr></hr>
        Sort by:
        <select name="sortingData">
          <option value="first">Newest</option> 
          <option value="second" selected>Highest Rating</option>
          <option value="third">Lowest Rating</option>
        </select>
        {this.state.visibleReviews.map((review) => <ReviewListEntry review={review}/>)}
        <div>
          <button onClick={this.displayPreviousReviews}>Previous</button>
          <button onClick={this.displayNextReviews}>Next</button>
        </div>
      </div>
    );
  }
}

export default ReviewsList;