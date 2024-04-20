import React from 'react';

const getInitialState = (debugName) => {
  console.log('getInitialState', debugName);
  return 10;
};

const Base2 = () => {
  // Lazy initial state
  // FIXME: Bad
  const [countBad, setCountBad] = React.useState(getInitialState('bad'));

  // [x]: Correct
  const [count, setCount] = React.useState(() => {
    // 這裡的 function 只會被執行一次
    return getInitialState('correct');
  });

  return (
    <section data-name="Base2">
      <div>countBad:{countBad}</div>
      <div>count:{count}</div>
      <button className="button" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </section>
  );
};

export default Base2;
