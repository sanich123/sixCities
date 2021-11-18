import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from './const';
import { createApi } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkAppDispatch } from './types/reducer';
import { checkAuth, fetchHotels } from './store/api-actions';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rootReducer } from './store/reducer/root-reducer';
import { requireAuthorization } from './store/reducer/user/user-actions';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

(store.dispatch as ThunkAppDispatch)(fetchHotels());
(store.dispatch as ThunkAppDispatch)(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store } >
      <ToastContainer
        position='top-left'
      />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

