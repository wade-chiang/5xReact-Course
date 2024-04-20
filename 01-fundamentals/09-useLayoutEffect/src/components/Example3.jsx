import { useState, useEffect, useLayoutEffect } from 'react';

function sleep(time = 200) {
  const start = performance.now();
  while (performance.now() - start < time) {}
}
// https://segmentfault.com/a/1190000039087645

// useEffect asynchronously 原理
// https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js#L308-L388
/**
 * 1 useEffect 是非同步 asynchronously ，是在 Browser paints screen 後執行
 * 2 useLayoutEffect 是同步 synchronously，是在 Browser paints screen 前執行
 * 3 99% 的情況，都是使用 useEffect
 * 4 當畫面出現閃跳時，才需使用 useLayoutEffect
 */

const HooksUseLayoutEffectExample = () => {
  const [count, setCount] = useState(0);

  //* // TODO
  // useLayoutEffect(() => {
  useEffect(() => {
    sleep();
    if (count === 1) {
      setCount(2);
    } else if (count === 2) {
      setCount(3);
    } else if (count === 3) {
      setCount(99);
    }
  }, [count]);
  // */

  return (
    <section data-name="Example5" className="text-center">
      <h1 className="h1">{count}</h1>
      <button className="my-btn" onClick={() => setCount(1)}>
        increment
      </button>
    </section>
  );
};

export default HooksUseLayoutEffectExample;
