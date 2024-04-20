/* eslint-disable react/jsx-props-no-spreading */
import { useState, useCallback } from 'react';

import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';

const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '學會Webpack', done: false },
  { id: 'id3', text: '年薪百萬', done: false },
];
const TodoList = () => {
  const [list, setList] = useState(initialList);

  const atAddItem = useCallback((text) => {
    const item = {
      id: window.crypto.randomUUID(),
      text,
      done: false,
    };
    setList((prev) => {
      return prev.concat(item);
    });
  }, []);

  const atToggleItem = useCallback((id) => {
    setList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            id: item.id,
            text: item.text,
            done: !item.done,
          };
        }
        return item;
      });
    });
  }, []);
  const atDeleteItem = useCallback((id) => {
    setList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }, []);
  return (
    <section data-name="TodoList.js">
      <TodoForm onAddItem={atAddItem} />
      {list.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDeleteItem={atDeleteItem}
          onToggleItem={atToggleItem}
        />
      ))}
    </section>
  );
};
export default TodoList;
