import { combineReducers } from 'redux';
import { appData } from './app/app-data';
import { processData } from './process/process-data';
import { userData } from './user/user-data';

export enum NameSpace {
  user = 'USER',
  data = 'DATA',
  app = 'APP',
}

export const rootReducer = combineReducers({
  [NameSpace.user]: userData,
  [NameSpace.data]: processData,
  [NameSpace.app]: appData,
});

export type RootState = ReturnType<typeof rootReducer>;
