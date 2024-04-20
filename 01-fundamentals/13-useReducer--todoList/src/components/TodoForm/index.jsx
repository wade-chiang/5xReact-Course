import { useState } from 'react';
import RenderTip from '../RenderTip';

/**
 * @typedef Props
 * @prop {(text:string) => void} onAddItem
 */

/**
 * @param {Props} props
 */
const TodoForm = (props) => {
  const { onAddItem } = props;

  const [input, setInput] = useState('');

  const atSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    setInput('');
    onAddItem(input);
  };

  return (
    <section className="style-1" data-name="TodoForm">
      <RenderTip />
      <form className="todo-form" onSubmit={atSubmit}>
        <input
          type="text"
          className="my-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default TodoForm;
