import { useMemo } from 'react';

import useTodoStore from './useTodoStore';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';
import './TodoList.scss';

const TodoList = () => {
  // BAD
  const { todos, addTodo, toggleTodo, filterType, setFilterType, fetchTodo } =
    useTodoStore();

  const filtersList = useMemo(() => {
    const filterResult = todos.filter((todo) => {
      if (filterType === 'completed') {
        return todo.done;
      }
      if (filterType === 'active') {
        return !todo.done;
      }
      return true;
    });
    return filterResult;
  }, [filterType, todos]);

  return (
    <section data-name="TodoList">
      <button className="btn btn-warning" onClick={fetchTodo}>
        fetch
      </button>
      <TodoForm onAddItem={addTodo} />
      <TodoFilter filterType={filterType} onFilterChange={setFilterType} />
      <div>
        {filtersList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={toggleTodo}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
