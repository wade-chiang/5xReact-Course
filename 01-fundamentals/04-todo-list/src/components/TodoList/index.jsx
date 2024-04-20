import { useState } from 'react';
import RenderTip from '../RenderTip';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import TodoFilter from '../TodoFilter';

/**
 * @typedef TodoItem
 * @prop {string} id
 * @prop {string} text
 * @prop {boolean} done
 */

/**
 * @type {TodoItem[]}
 */
const initialList = [
  { id: 'id1', text: '學會React', done: true },
  { id: 'id2', text: '年薪百萬', done: false },
];

const TodoList = () => {
  const [list, setList] = useState(initialList);
  const [filterType, setFilterType] = useState('all');

  /**
   * @param {string} text
   */
  const atAddItem = (text) => {
    const item = {
      id: window.crypto.randomUUID(),
      text,
      done: false,
    };
    setList(list.concat(item));
  };

  /**
   * @param {string} id
   */
  const atToggleItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          text: item.text,
          done: !item.done,
        };
      }
      return item;
    });
    setList(newList);
  };

  const filtersList = list.filter((todo) => {
    if (filterType === 'completed') {
      return todo.done;
    }
    if (filterType === 'active') {
      return !todo.done;
    }
    return true;
  });

  return (
    <section className="todo-list" data-name="TodoList">
      <RenderTip />
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter filterType={filterType} onFilterChange={setFilterType} />
      <div className="mt-4">
        {filtersList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={atToggleItem}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
