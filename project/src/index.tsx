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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(fetchHotels());
(store.dispatch as ThunkAppDispatch)(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

