import React from 'react';

// https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching
const AutoMaticBatchingExample = () => {
  const renderRef = React.useRef(0);
  renderRef.current += 1;
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(100);

  // TODO
  const atIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // count 會是 ?
  };
  // TODO
  const atIncrement2 = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // count 會是
  };
  // TODO
  const atBatchingUpdate = () => {
    // 只要是 React 提供的事件，該函式裡不管執行多少次 setState
    // 都只會獨發 render 一次
    setCount(1);
    setCount(2);
    //
    setCount2(101);
    setCount2(102);
  };
  // TODO
  const atBatchingUpdateSetTimeout = () => {
    setTimeout(() => {
      // React 17 會 render 4 次
      // React 18 只會 render 1 次
      setCount(1);
      setCount(2);
      //
      setCount2(101);
      setCount2(102);
    }, 500);
  };
  // TODO
  const atBatchingUpdatePromise = () => {
    Promise.resolve().then(() => {
      // React 17 會 render 4 次
      // React 18 只會 render 1 次
      setCount(1);
      setCount(2);
      setCount(3);
      setCount(4);
    });
  };

  React.useEffect(() => {
    console.log(`render:${renderRef.current}`);
  });
  return (
    <section data-name="Example20">
      <h1 className="text-danger">render:{renderRef.current}</h1>
      <h1>count:{count}</h1>
      <h1>count2:{count2}</h1>
      <button className="my-btn" onClick={atIncrement}>
        increment
      </button>
      <button className="my-btn" onClick={atIncrement2}>
        increment2
      </button>
      <button className="my-btn" onClick={atBatchingUpdate}>
        atBatchingUpdate
      </button>
      <button className="my-btn" onClick={atBatchingUpdateSetTimeout}>
        atBatchingUpdateSetTimeout
      </button>
      <button className="my-btn" onClick={atBatchingUpdatePromise}>
        atBatchingUpdatePromise
      </button>
    </section>
  );
};
export default AutoMaticBatchingExample;
