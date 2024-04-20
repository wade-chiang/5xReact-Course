import React, { useState } from 'react';
import Select from './Select';

const OPTIONS = ['Vue', 'React', 'Angular'];
const Example = () => {
  const [select, setSelect] = useState('');
  return (
    <section data-name="Example3">
      <h1>select:{select}</h1>
      <Select value={select} onChange={setSelect} options={OPTIONS} />
    </section>
  );
};

export default Example;
