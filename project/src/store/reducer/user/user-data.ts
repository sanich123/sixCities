import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { requireAuthorization, requireLogout, commentRequestFail, commentRequest } from './user-actions';

export type UserInitialState = {
  authorizationStatus: AuthorizationStatus,
  authorizationEmail: null | string | undefined,
  isCommentPosted: boolean,
}

const initialState: UserInitialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationEmail: null,
  isCommentPosted: false,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state: UserInitialState, action) => {
      const { authStatus, authEmail } = action.payload;
      state.authorizationStatus = authStatus;
      state.authorizationEmail = authEmail;
    })
    .addCase(requireLogout, (state: UserInitialState) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(commentRequest, (state: UserInitialState) => {
      state.isCommentPosted = true;
    })
    .addCase(commentRequestFail, (state: UserInitialState) => {
      state.isCommentPosted = false;
    });

});

export { userData };
