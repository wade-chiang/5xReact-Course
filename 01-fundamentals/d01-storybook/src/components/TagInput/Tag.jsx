import React from 'react';
import cx from 'classnames';
import style from './TagInput.module.scss';

/* type TagProps = {
  text: string,
  onRemove: (text: string) => void,
};
 */
const Tag = (props) => {
  const { text, onRemove } = props;

  return (
    <div
      data-testid="taginput__tag"
      className={cx('taginput_item', style.tagItem)}
    >
      <span data-testid="text">{text}</span>
      <button
        data-testid={`taginput__tag-remove-btn-${text}`}
        onClick={() => {
          onRemove(text);
        }}
      >
        x
      </button>
    </div>
  );
};

export default React.memo(Tag);
