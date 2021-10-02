import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PlacesCount = {
  PLACES_COUNT: 458,
};

ReactDOM.render(
  <React.StrictMode>
    <App placesCount = {PlacesCount.PLACES_COUNT}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
