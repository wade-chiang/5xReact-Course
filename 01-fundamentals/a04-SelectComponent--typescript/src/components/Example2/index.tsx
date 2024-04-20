import React, { useState } from 'react';

type OptionType = {
  id: string;
  value: string;
};
const OPTIONS: OptionType[] = [
  { id: 'id0', value: 'Vue' },
  { id: 'id1', value: 'React' },
  { id: 'id2', value: 'Angular' },
];
const Example = () => {
  const [select, setSelect] = useState<OptionType>();
  return (
    <section data-name="Example2">
      <h1>select:{JSON.stringify(select)}</h1>
      <select
        className="my-input"
        value={select?.id}
        onChange={(e) => {
          const { value: targetValue } = e.target;
          const findItem = OPTIONS.find((i) => i.id === targetValue);
          if (findItem) {
            setSelect(findItem);
          }
        }}
      >
        {OPTIONS.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.value}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Example;
