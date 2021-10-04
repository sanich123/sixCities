import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PlacesCount = {
  PLACES_COUNT: 458,
};

const FiveCards = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <App placesCount={PlacesCount.PLACES_COUNT} cardsList={FiveCards} />
  </React.StrictMode>,
  document.getElementById('root'),
);
