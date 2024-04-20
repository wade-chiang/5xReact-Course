import { useSyncExternalStore } from 'react';
import todosStore, { dispatch } from './todosStore';

const TodoCount = () => {
  const todoCount = useSyncExternalStore(
    todosStore.subscribe,
    () => todosStore.getSnapshot().length,
  );
  return <section data-name="TodoCount">Count:{todoCount}</section>;
};

const Example = () => {
  const state = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <section data-name="Example3 todosStore">
      <button className="my-btn" onClick={() => dispatch({ type: 'ADD_TODO' })}>
        Add todo
      </button>
      <hr />
      <TodoCount />
      <section data-name="TodoList">
        <ul>
          {state.map((todo) => (
            <li key={todo.id}>
              <button
                onClick={() => {
                  dispatch({ type: 'TOGGLE_TODO', id: todo.id });
                }}
              >
                {todo.text}, {`${todo.done}`}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Example;
