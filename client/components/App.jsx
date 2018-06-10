import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import ReviewsList from './reviews/ReviewsList.jsx';

const App = () => (
  <div>
    <div><Overview/></div>
    <div><ReviewsList/></div>
  </div>
);

export default App;