import { AuthorizationStatus } from '../../../const';
import { NameSpace, RootState } from '../root-reducer';

export const getAuthEmail = (state: RootState): string | null | undefined => (
  state[NameSpace.user].authorizationEmail
);

export const getCommentStatus = (state: RootState): boolean => state[NameSpace.user].isCommentPosted;

export const statusOfAuth = (state: RootState): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
