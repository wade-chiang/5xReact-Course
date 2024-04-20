/* eslint-disable default-param-last */
import { UPDATE_USER_INFO } from '../actions';

const initialUserInfo = {
  name: 'milkmidi',
  age: 18,
};

export default function userInfo(state = initialUserInfo, action) {
  switch (action.type) {
    case UPDATE_USER_INFO: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
