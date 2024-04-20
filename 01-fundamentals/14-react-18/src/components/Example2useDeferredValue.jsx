import { useState, useDeferredValue } from 'react';
import ExpensiveView from './ExpensiveView';

const Inner1 = () => {
  const [value, setValue] = useState(0);
  return (
    <section data-name="Inner1" className="style-red bg-red">
      <h3>value:{value}</h3>
      <input
        type="range"
        className="my-range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ExpensiveView value={value} />
    </section>
  );
};

const Inner2 = () => {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);
  const isStale = value !== deferredValue;
  return (
    <section data-name="Inner2" className="style-green" data-stripes>
      <h3>
        value:{value} / <span className="bg-info">{deferredValue}</span>,
      </h3>
      <h3>isStale:{`${isStale}`}</h3>
      <input
        type="range"
        className="my-range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ExpensiveView value={deferredValue} />
    </section>
  );
};

const Example2useDeferredValue = () => {
  return (
    <section data-name="Example2useDeferredValue">
      <Inner1 />
      <Inner2 />
    </section>
  );
};
export default Example2useDeferredValue;
