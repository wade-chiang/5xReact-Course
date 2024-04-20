import { memo } from 'react';
import shallow from 'zustand/shallow';
import useCountStore from './useCountStore';
import Counter from './Counter';
import DisplayText from './DisplayText';

const Example = () => {
  // bad
  const { count, increment, decrement, setCount, setText } = useCountStore();

  // https://github.com/pmndrs/zustand#selecting-multiple-state-slices
  // correct
  /* const {
    count, increment, decrement, setCount, setText
  } = useCountStore((state) => ({
    count: state.count,
    increment: state.increment,
    decrement: state.decrement,
    setCount: state.setCount,
    setText: state.setText
  }), shallow); */

  return (
    <section data-name="Example1">
      <h3>count:{count}</h3>
      <button className="my-tab-btn" onClick={increment}>
        +
      </button>
      <button className="my-tab-btn" onClick={decrement}>
        -
      </button>
      <button className="my-tab-btn" onClick={() => setCount(count + 2)}>
        +=2
      </button>
      <button className="my-tab-btn" onClick={() => setText(`${Date.now()}`)}>
        setText
      </button>
      <Counter />
      <DisplayText />
    </section>
  );
};

export default memo(Example);
