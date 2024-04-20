import { useCallback, useMemo } from 'react';
import RenderTip from '../RenderTip';
import TodoForm from '../TodoForm';
import TodoItem from '../TodoItem';
import TodoFilter from '../TodoFilter';
import useTodoReducer, { dispatchDeleteTodo } from './useTodoReducer';

const TodoList = () => {
  // TODO1
  const [state, dispatch] = useTodoReducer();

  // TODO1
  const atAddItem = useCallback((text) => {
    dispatch({ type: 'addTodo', text });
  }, []);

  const atToggleItem = useCallback((id) => {
    dispatch({ type: 'toggleTodo', id });
  }, []);

  const atDeleteItem = useCallback((id) => {
    // TODO2 good
    dispatchDeleteTodo(dispatch, id);
  }, []);

  const atFilterChange = useCallback((type) => {
    dispatch({ type: 'filterType', filterType: type });
  }, []);

  const { todoList, filterType } = state;

  const filtersList = useMemo(() => {
    const filterResult = todoList.filter((todo) => {
      if (filterType === 'completed') {
        return todo.done;
      }
      if (filterType === 'active') {
        return !todo.done;
      }
      return true;
    });
    return filterResult;
  }, [filterType, todoList]);

  return (
    <section className="todo-list" data-name="TodoList">
      <RenderTip />
      <TodoForm onAddItem={atAddItem} />
      <TodoFilter filterType={filterType} onFilterChange={atFilterChange} />
      <div>
        {filtersList.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            done={item.done}
            text={item.text}
            onToggleItem={atToggleItem}
            onDeleteItem={atDeleteItem}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
