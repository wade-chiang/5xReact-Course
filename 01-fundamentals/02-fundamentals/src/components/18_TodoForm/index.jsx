import React from 'react';
import TodoForm from './TodoForm';

const Example = () => {
  const [list, setList] = React.useState(['react', 'vue']);

  const atSubmit = (value) => {
    setList((prev) => prev.concat(value));
  };
  return (
    <section data-name="Example18">
      <p>{JSON.stringify(list)}</p>
      <TodoForm onSubmit={atSubmit} />
    </section>
  );
};

export default Example;
