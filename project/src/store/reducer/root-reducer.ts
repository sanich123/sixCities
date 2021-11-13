import {combineReducers} from 'redux';
import { userData } from './user/user-data';

export enum NameSpace {
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.user]: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
