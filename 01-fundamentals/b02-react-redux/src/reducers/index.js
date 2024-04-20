import { combineReducers } from 'redux';
import count from './count';
import userInfo from './userInfo';
import common from './common';

const reducers = combineReducers({
  count,
  userInfo,
  common,
});

// flow
// export type StoreTypes = ReturnType<typeof reducers>;

export default reducers;
