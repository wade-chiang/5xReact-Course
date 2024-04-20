/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState, useCallback, useEffect, memo } from 'react';

const Item = memo((props) => {
  const { onDelete, color } = props;
  const colorRef = useRef(color);

  useEffect(() => {
    const c = colorRef.current;
    return () => {
      console.log(
        `%cComponent unmounted:${c}`,
        `font-size:20px;color:black;background:${c}`,
      );
    };
  }, []);

  useEffect(() => {
    const c = colorRef.current;
    console.log(`%cComponent update:${c}`, `font-size:16px;color:${c}`);
  });

  return (
    <div
      className="box p-1 mb-1"
      data-name={colorRef.current}
      style={{ backgroundColor: colorRef.current }}
    >
      <input type="text" />
      <button className="my-btn" onClick={() => onDelete(color)}>
        Delete
      </button>
      <span className="px-2">{color}</span>
    </div>
  );
});

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink'];

const KeyExample0 = () => {
  const [isUniqKey, setIsUniqKey] = useState(true);
  const [list, setList] = useState(COLORS);
  const atRemoveContent = useCallback((color) => {
    setList((prevList) => prevList.filter((c) => c !== color));
  }, []);
  useEffect(() => {
    setList(COLORS);
  }, [isUniqKey]);
  return (
    <section data-name="KeyExample1">
      <label className="flex">
        <input
          type="checkbox"
          className="my-toggle"
          checked={isUniqKey}
          onChange={(e) => setIsUniqKey(e.target.checked)}
        />
        <span className="ms-2">{isUniqKey ? 'uniqKey' : 'indexKey'}</span>
      </label>
      <div>
        {list.map((color, index) => {
          return (
            <Item
              key={isUniqKey ? color : index}
              color={color}
              onDelete={atRemoveContent}
            />
          );
        })}
      </div>
    </section>
  );
};

export default KeyExample0;
