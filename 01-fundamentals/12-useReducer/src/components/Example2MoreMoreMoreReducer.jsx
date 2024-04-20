import { useReducer } from 'react';

const mockFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('mockData');
    }, 1000);
  });
};

//* // TODO 1
const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'setData':
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    case 'setError':
      return {
        ...state,
        data: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
// */

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};
const MoreMoreMoreReducer = () => {
  // TODO 2
  const [state, dispatch] = useReducer(reducer, initialState);
  const atDoFetch = () => {
    //* // TODO 3
    dispatch({ type: 'loading', payload: true });
    mockFetch()
      .then((result) => {
        // TODO 3
        dispatch({ type: 'setData', payload: result });
      })
      .catch((err) => {
        // TODO 3
        dispatch({ type: 'setError', payload: err });
      });
    // */
  };
  return (
    <section data-name="Example2 - MoreMoreMoreReducer">
      <h1>isLoading:{state.isLoading.toString()}</h1>
      <h2>data:{state.data}</h2>
      <h2>error:{state.error}</h2>
      <button className="my-btn" onClick={atDoFetch}>
        atDoFetch
      </button>
    </section>
  );
};

export default MoreMoreMoreReducer;
