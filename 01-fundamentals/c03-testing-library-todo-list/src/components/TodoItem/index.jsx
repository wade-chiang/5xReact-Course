/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';
import style from './TodoItem.module.scss';

const TodoItem = (props) => {
  const { id, text, done, onToggleItem, onDeleteItem } = props;

  return (
    <section data-name="TodoItem" className="style-2">
      <div
        data-active={done}
        data-testid="li"
        className={style.todoItem}
        onClick={() => {
          onToggleItem(id);
        }}
      >
        {text}
      </div>
      <button
        data-testid="todo-item__delete-btn"
        className={cx('btn btn-danger', style.btn)}
        onClick={() => {
          onDeleteItem(id);
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default React.memo(TodoItem);
