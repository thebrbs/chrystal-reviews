import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary.jsx';
import StarDistribution from './StarDistribution.jsx';
import LovedFor from './LovedFor.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReviews : 1381,
      location : 'SOMA'
    };
  }

  render() {
    return (
      <div>
        <div>
          <h2>What {this.state.totalReviews} People Are Saying</h2>
        </div>
        <hr></hr>
        <div><Summary/></div>
        <div><StarDistribution/></div>
        <div><LovedFor/></div>
        <div>
          <h3>Best Restaurants in {this.state.location}</h3>
        </div>
      </div>  
    );
  }
}

export default Overview;