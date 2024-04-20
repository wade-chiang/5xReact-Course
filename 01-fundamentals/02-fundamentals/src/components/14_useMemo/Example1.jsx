// https://zh-hant.reactjs.org/docs/hooks-reference.html#usememo
import React from 'react';

/**
 * @param {number} value
 * @returns number
 */
const computeExpensiveValue = (value) => {
  console.log('computeExpensiveValue');
  let r = value;
  for (let i = 0; i < 1000000000; i += 1) {
    r += 1;
  }
  return r;
};

const HooksUseMemo = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  //* // TODO
  console.time();

  const memoizedValue = computeExpensiveValue(count);
  /* // 當 dependencies 有更新時，重新計算
  const memoizedValue = React.useMemo(() => {
    return computeExpensiveValue(count);
  }, [count]);
  console.timeEnd();
  // */

  return (
    <section data-name="Example14-1">
      <h1>memoizedValue: {memoizedValue}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        setCount
      </button>
      <button className="my-btn" onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
};

export default HooksUseMemo;
