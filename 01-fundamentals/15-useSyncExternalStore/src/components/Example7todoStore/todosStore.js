/* eslint-disable no-plusplus */
import createReducerStore from '../Example6Reducer/createReducerStore';

let nextId = 0;
const initialState = [{ id: nextId++, text: 'React', done: true }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: nextId++,
        text: `Todo #${nextId}`,
        done: false,
      });
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const todosStore = createReducerStore(reducer, initialState);

export default todosStore;
export const { dispatch } = todosStore;
