
import {combineReducers} from 'redux';
import { appData } from './app/app-data';
import { dataData } from './data/data';
import { userData } from './user/user-data';

export enum NameSpace {
  user = 'USER',
  data = 'DATA',
  app = 'APP',
}

export const rootReducer = combineReducers({
  [NameSpace.user]: userData,
  [NameSpace.data]: dataData,
  [NameSpace.app]: appData,
});

export type RootState = ReturnType<typeof rootReducer>;
