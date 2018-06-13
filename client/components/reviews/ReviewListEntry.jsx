import React from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';
import reviewFunctions from './reviewHelperFunctions.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewBody : this.props.review.body.slice(0, 300),
      reviewBodyLength : this.props.review.body.length
    }

    this.toggleFullReview = this.toggleFullReview.bind(this);
  }

  toggleFullReview() {
    this.setState({
      reviewBody : this.props.review.body
    });
  }

  render() {
    return (
      <div className="reviewListEntry">
        <div className="dinerInfo">
          <div className="profilePhoto"><img src="./assets/opentable_diner_profile_photo.png" height="50"></img></div>
          <div><span>OpenTable Diner <b>{this.props.review.username}</b></span></div>
          <div id="starrating">
            <StarRatings
              rating={Number(this.props.review.overall_rating)}
              starRatedColor="red"
              numberOfStars={5}
              starDimension="20px"
              starSpacing="1px"
            />
          </div>
          <div>{this.props.review.overall_rating} Dined on {reviewFunctions.formatDate(new Date(this.props.review.date))}</div>
          <div id="reviewbody">          
            <div>{this.state.reviewBody}</div>
            <button onClick={this.toggleFullReview}>+ Read More</button>
            <button class="reviewlistbutton"><img src="./assets/opentable_helpful_icon.png" height="30"></img><span class="reviewlistbutton">Helpful</span></button>
            <button class="reviewlistbutton"><img vspace="0px" src="./assets/opentable_report_icon.png" height="30"></img><span class="reviewlistbutton">Report</span></button>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default ReviewListEntry;