/* eslint-disable default-param-last */
const initialState = {
  email: '',
  name: '',
  role: '',
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}
