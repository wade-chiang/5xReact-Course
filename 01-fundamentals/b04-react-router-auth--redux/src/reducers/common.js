/* eslint-disable default-param-last */
const initialState = {
  loading: false,
};
export default function common(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
