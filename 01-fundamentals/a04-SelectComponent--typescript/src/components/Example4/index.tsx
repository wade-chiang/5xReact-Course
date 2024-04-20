import React, { useState } from 'react';
import Select from './Select';

type OptionType = {
  id: string;
  value: string;
};
const OPTIONS: OptionType[] = [
  { id: 'id0', value: 'Vue' },
  { id: 'id1', value: 'React' },
  { id: 'id2', value: 'Angular' },
];
const getLabel = (value: OptionType) => value.value;
const getKey = (value: OptionType) => value.id;
const Example = () => {
  const [select, setSelect] = useState<OptionType>();
  return (
    <section data-name="Example3">
      <h1>select:{JSON.stringify(select)}</h1>
      <Select<OptionType>
        value={select}
        onChange={setSelect}
        options={OPTIONS}
        getLabel={getLabel}
        getKey={getKey}
      />
    </section>
  );
};

export default Example;
