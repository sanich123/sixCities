import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../src/store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { requireAuthorization } from './store/actions';
import { AuthorizationStatus } from './const';
import { createApi } from './services/api';
import { applyMiddleware } from '@reduxjs/toolkit';
import { ThunkAppDispatch } from './types/reducer';
import { checkAuth, fetchHotels } from './store/api-actions';
import App from './components/app/app';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(fetchHotels());
(store.dispatch as ThunkAppDispatch)(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

