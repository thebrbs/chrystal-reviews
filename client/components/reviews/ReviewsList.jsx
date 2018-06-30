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
      visibleReviews : [],
      value: 'newest'
    }
    
    this.start = 0;
    this.end = 40;
    
    this.displayAllReviews = this.displayAllReviews.bind(this);
    this.displayNextReviews = this.displayNextReviews.bind(this);
    this.displayPreviousReviews = this.displayPreviousReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.chooseSortingFunction = this.chooseSortingFunction.bind(this);
  }
  
  componentDidMount() {
    this.displayAllReviews();
  }
  
  displayAllReviews() {
    axios.get(`/restaurant/${this.props.restaurantId}/reviews`)
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
  
  chooseSortingFunction(event, callback) {
    let sorter = event  

    const sortingFunction = (sorter) => {
      let sortFunction;

      const sortByDate = (a, b) => (
        new Date(b.date) - new Date(a.date)
      )
  
      const sortByHighest = (a, b) => (
        b.overall_rating - a.overall_rating
      )
  
      const sortByLowest = (a, b) => (
        a.overall_rating - b.overall_rating
      )

      if (sorter === "newest") {
        sortFunction = sortByDate;
      } else if (sorter === "highest") {
        sortFunction = sortByHighest;
      } else if (sorter === "lowest") {
        sortFunction = sortByLowest;
      }

      callback(sortFunction);
    }

    sortingFunction(sorter);
  }

  handleChange(event) {
    let selectedValue = event.target.value;
    let instance = this;
    this.chooseSortingFunction(selectedValue, function(result) {
      instance.setState({
        value : selectedValue,
        visibleReviews : instance.state.reviews.sort(result)
      }); 
    });
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
      <div className="reviewsList">
      <hr></hr>
        <p>Sort by:</p>
        <select value={this.state.value} onChange={this.handleChange} id="filterReviews">
          <option value="newest">Newest</option> 
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
        </select>
        {this.state.visibleReviews.map((review, i) => <ReviewListEntry review={review} key={i} />)}
        <div>
          <button onClick={this.displayPreviousReviews}>Previous</button>
          <button onClick={this.displayNextReviews}>Next</button>
        </div>
      </div>
    );
  }
}

export default ReviewsList;