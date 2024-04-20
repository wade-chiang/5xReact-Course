import React, { useCallback, useState } from 'react';
import Tag from './Tag';
import style from './TagInput.module.scss';

/* type TagInputProps = {
  tags: string[],
  onChange: (tags: string[]) => void,
}; */

const TagInput = (props) => {
  const { tags, onChange } = props;

  const [input, setInput] = useState('');

  const atInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      setInput('');
      if (input === '' || tags.includes(input)) {
        return;
      }
      onChange(tags.concat(input));
    }
  };

  const atTagRemove = useCallback(
    (text) => {
      onChange(tags.filter((t) => t !== text));
    },
    [tags, onChange],
  );

  return (
    <div className={style.root}>
      {tags.map((text) => {
        return <Tag key={text} text={text} onRemove={atTagRemove} />;
      })}
      <input
        data-testid="taginput__input"
        className={style.input}
        onKeyDown={atInputKeyDown}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default React.memo(TagInput);
