import React from 'react';
/**
 * 參考文章：https://github.com/donavon/hook-flow
 * useEffect vs useLayoutEffect(當畫面遇到閃爍問題才需要使用)
 * 1 React render
 * 2 Cleanup previous LayoutEffects
 * 3 useLayoutEffect 執行 ------------ 重點
 * 4 Browser paints screen
 * 5 Cleanup previous Effects
 * 6 useEffect 執行
 * -------------------------
 * dependency Array 有更新時，repeat step 1 - 6
 */

const log = (msg) => console.log(`%c${msg}`, 'background: #3498db; color: white');
const logLayout = (msg) => console.log(`%c${msg}`, 'background: #e67e22; color: white');

const HooksUseLayoutEffect = () => {
  const [count, setCount] = React.useState(0);

  log('------------------');
  log(`1 render:${count}`);

  React.useLayoutEffect(() => {
    logLayout(`3 useLayoutEffect:${count}`);
    return () => {
      logLayout(`2 useLayoutEffect cleanup:${count}`);
    };
  });
  React.useEffect(() => {
    log(`6 useEffect:${count}`);
    if (count === 1) {
      // alert('stop');
    }
    return () => {
      log(`5 useEffect cleanup:${count}`);
    };
  });

  return (
    <section data-name="useEffect and useLayoutEffect">
      <h2>{count}</h2>
      <button className="my-btn" onClick={() => setCount((prev) => prev + 1)}>
        Click me
      </button>
    </section>
  );
};

export default HooksUseLayoutEffect;
