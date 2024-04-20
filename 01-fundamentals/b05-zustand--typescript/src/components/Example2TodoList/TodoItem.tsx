import React, { memo } from 'react';
import RenderTip from '@/components/RenderTip';
import cx from 'classnames';

type TodoItemProps = {
  id: string;
  done: boolean;
  text: string;
  onToggleItem: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { id, done, onToggleItem, text } = props;
  const onClick = () => {
    onToggleItem(id);
  };
  return (
    <section
      data-name="TodoItem"
      className="style-green"
      data-stripes={done ? true : undefined}
    >
      <RenderTip />
      <div className={cx('todo-item', done && 'done')} onClick={onClick}>
        {text}
      </div>
    </section>
  );
};

export default memo(TodoItem);
