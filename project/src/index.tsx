import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PlacesCount = {
  PLACES_COUNT: 458,
};

const Cards = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={PlacesCount.PLACES_COUNT} cards={Cards} />
  </React.StrictMode>,
  document.getElementById('root'),
);
