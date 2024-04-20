import { useSyncExternalStore } from 'react';
import createReducerStore from './createReducerStore';

const initialState = {
  count: 0,
  text: 'milkmidi',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'text':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

function createThunkMiddleware() {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  const middleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      // The thunk middleware looks for any functions that were passed to `store.dispatch`.
      // If this "action" is really a function, call it and return the result.
      if (typeof action === 'function') {
        // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
        return action(dispatch, getState);
      }
      // Otherwise, pass the action down the middleware chain as usual
      return next(action);
    };
  return middleware;
}

const store = createReducerStore(reducer, initialState, [
  createThunkMiddleware(),
]);

const identity = (_) => _;
export default function useReducerStore(selector = identity) {
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getSnapshot()),
  );
}

export const { dispatch } = store;
