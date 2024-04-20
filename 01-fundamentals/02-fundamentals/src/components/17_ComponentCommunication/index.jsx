import React from 'react';
import ChildComponent from './ChildComponent';
import './app.scss';

// https://i.stack.imgur.com/9hvlb.png

const Example = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState('');
  // TODO
  const atCallParent = (value) => {
    setData(value);
  };
  return (
    <section data-name="Example17">
      <h2>count:{count}</h2>
      <h2>data:{data}</h2>
      <button className="button" onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
      {/* TODO */}
      <ChildComponent count={count} onCallParent={atCallParent} />
    </section>
  );
};

export default Example;
