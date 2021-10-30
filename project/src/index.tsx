import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import StartUp from './components/start-up/start-up';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <StartUp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
