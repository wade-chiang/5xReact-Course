import React, { useState } from 'react';
import PickrComponent from './PickrComponent';

const FlatPickrComponentExample = () => {
  const [date, setDate] = useState('2023/01/02');
  return (
    <section data-name="Example4">
      <div className="my-code">
        <pre>{JSON.stringify(date, null, 2)}</pre>
      </div>
      <PickrComponent onChange={setDate} value={date} />
    </section>
  );
};

export default React.memo(FlatPickrComponentExample);
