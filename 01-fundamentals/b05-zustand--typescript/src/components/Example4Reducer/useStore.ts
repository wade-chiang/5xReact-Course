// https://github.com/pmndrs/zustand#cant-live-without-redux-like-reducers-and-action-types
import { create } from 'zustand';
import { devtools, redux } from 'zustand/middleware';

const initialState = {
  count: 0,
  name: 'milkmidi',
};

type State = typeof initialState;

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setName'; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'setName':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
// Usage with a plain action store, it will log actions as "setState"
// Usage with a redux store, it will log full action types
const useStore = create(devtools(redux(reducer, initialState), { name: 'reduxExample' }));

export default useStore;
