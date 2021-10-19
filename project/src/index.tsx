import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());
// eslint-disable-next-line no-console
console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
