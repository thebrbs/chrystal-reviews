import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Summary from './Summary.jsx';
import StarDistribution from './StarDistribution.jsx';
import LovedFor from './LovedFor.jsx';
import exampleData from './../exampleData.js';
import overview from './helperFunctions.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReviews : 1381,
      neighborhood : 'SOMA',
      overallRating : overview.overallRating(exampleData),
      foodRating : overview.foodRating(exampleData),
      serviceRating : overview.serviceRating(exampleData),
      ambienceRating : overview.ambienceRating(exampleData),
      valueRating : overview.valueRating(exampleData),
      noiseLevel : overview.noiseLevel(overview.noise(exampleData)),
      recommended : overview.recommended(exampleData)
    }
  }


  render() {
    axios.get('/reviews')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <div>
        <div>
          <h2>What {this.state.totalReviews} People Are Saying</h2>
        </div>
        <hr></hr>
        <div><Summary restaurant={this.state}/></div>
        <div><StarDistribution/></div>
        <div><LovedFor/></div>
        <div>
          <h3>Best Restaurants in {this.state.neighborhood}</h3>
        </div>
      </div>  
    );
  }
}

export default Overview;