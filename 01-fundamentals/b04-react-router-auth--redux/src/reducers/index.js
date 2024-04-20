import { combineReducers } from 'redux';
import user from './user';
import common from './common';

const combine = combineReducers({
  user,
  common,
});

export default combine;
