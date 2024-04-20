import React, { memo } from 'react';
import RenderTip from '@/components/RenderTip';

type TodoFormProps = {
  onAddItem: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const { onAddItem } = props;
  const [input, setInput] = React.useState('');
  const atSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === '') {
      return;
    }
    setInput('');
    onAddItem(input);
  };

  return (
    <section className="style-1" data-name="TodoForm.js">
      <RenderTip />
      <form className="todo-form" onSubmit={atSubmit}>
        <input
          type="text"
          className="my-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </section>
  );
};

export default memo(TodoForm);
