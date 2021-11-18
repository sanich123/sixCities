import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../../const';
import { ActionType } from '../../../types/reducer';

export const commentRequest = createAction(ActionType.POST_COMMENT);
export const commentRequestFail = createAction(ActionType.POST_COMMENT_FAIL);
export const requireLogout = createAction(ActionType.REQUIRE_LOGOUT);

export const requireAuthorization = createAction(
  ActionType.REQUIRE_AUTHORIZATION,
  (authStatus: AuthorizationStatus, authEmail?: string | null | undefined) => ({
    payload: {
      authStatus,
      authEmail,
    },
  }),
);

