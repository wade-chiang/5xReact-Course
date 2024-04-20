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

const store = createReducerStore(reducer, initialState);

const identity = (_) => _;
export default function useReducerStore(selector = identity) {
  return useSyncExternalStore(store.subscribe, () =>
    selector(store.getSnapshot()),
  );
}

export const { dispatch } = store;
