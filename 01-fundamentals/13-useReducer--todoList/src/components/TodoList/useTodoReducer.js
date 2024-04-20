import React, { useReducer } from 'react';

// TODO 1
const initialState = {
  filterType: 'all',
  todoList: [
    { id: 'id1', text: '學會React', done: true },
    { id: 'id3', text: '年薪百萬', done: false },
  ],
};

//* // TODO 2
function reducer(state, action) {
  switch (action.type) {
    case 'filterType':
      return {
        ...state,
        filterType: action.filterType,
      };
    case 'addTodo': {
      const item = {
        id: new Date().getTime().toString(),
        text: action.text,
        done: false,
      };
      return {
        ...state,
        todoList: state.todoList.concat(item),
      };
    }
    case 'toggleTodo': {
      const { todoList } = state;
      const { id } = action;
      const newList = todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
      return {
        ...state,
        todoList: newList,
      };
    }
    case 'deleteTodo': {
      const { id } = action;
      const newList = state.todoList.filter((item) => item.id !== id);
      return {
        ...state,
        todoList: newList,
      };
    }
    default:
      return state;
  }
}
// */

// TODO 3
export default function useTodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}

// TODO4
export const dispatchDeleteTodo = (dispatch, id) => {
  dispatch({ type: 'deleteTodo', id });
};
