/* eslint-disable default-param-last */
import { UPDATE_USER_INFO } from '../actions';

const initialUserInfo = {
  name: '',
  age: -1,
};

export default function userInfo(state = initialUserInfo, action) {
  switch (action.type) {
    case UPDATE_USER_INFO: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
}
