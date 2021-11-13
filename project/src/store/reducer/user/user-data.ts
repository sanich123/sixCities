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
    .addCase(requireAuthorization, ({ authorizationStatus, authorizationEmail }: UserInitialState, action) => {
      const { authStatus, authEmail } = action.payload;
      authorizationStatus = authStatus;
      authorizationEmail = authEmail;
    })
    .addCase(requireLogout, ({ authorizationStatus }: UserInitialState) => {
      authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(commentRequest, ({ isCommentPosted }: UserInitialState) => {
      isCommentPosted = true;
    })
    .addCase(commentRequestFail, ({ isCommentPosted }: UserInitialState) => {
      isCommentPosted = false;
    });

});

export { userData };
