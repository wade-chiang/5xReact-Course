import { useState } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState('');
  const { onSubmit } = props;
  const atClick = () => {
    // TODO
    if (input !== '') {
      onSubmit(input);
      setInput('');
    }
  };
  return (
    <section data-name="TodoForm">
      <input
        type="text"
        className="my-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="my-btn" onClick={atClick}>
        add
      </button>
    </section>
  );
};
export default TodoForm;
