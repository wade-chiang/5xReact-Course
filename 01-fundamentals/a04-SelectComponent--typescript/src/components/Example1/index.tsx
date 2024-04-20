import React, { useState } from 'react';

const OPTIONS = ['Vue', 'React', 'Angular'];
const Example = () => {
  const [select, setSelect] = useState('');
  return (
    <section data-name="Example1">
      <h1>select:{select}</h1>
      <select
        className="my-input"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        {OPTIONS.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default Example;
