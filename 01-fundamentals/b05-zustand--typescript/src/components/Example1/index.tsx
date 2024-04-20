import { memo } from 'react';
import shallow from 'zustand/shallow';
import RenderTip from '@/components/RenderTip';
import useCountStore from './useCountStore';

const InnerComponent = memo(() => {
  // BAD
  const { text, setText } = useCountStore((state) => {
    return {
      text: state.text,
      setText: state.setText,
    };
  });
  return (
    <section data-name="Inner">
      <h1>{text}</h1>
      <button className="my-btn" onClick={() => setText(`${Date.now()}`)}>
        setText
      </button>
      <RenderTip />
    </section>
  );
});

const CountExampleComponent = () => {
  // BAD
  const { count, increment, decrement, setCount, setText } = useCountStore();

  // https://github.com/pmndrs/zustand#selecting-multiple-state-slices

  /* // GOOD
  const { count, increment, decrement, setCount, setText } = useCountStore(
    (state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
      setCount: state.setCount,
      setText: state.setText,
    }),
    shallow,
  );
  // */

  return (
    <section data-name="CountExample">
      <h3>count:{count}</h3>
      <div className="space-x-2">
        <button className="my-btn" onClick={increment}>
          +
        </button>
        <button className="my-btn" onClick={decrement}>
          -
        </button>
        <button className="my-btn" onClick={() => setCount(count + 2)}>
          +=2
        </button>
        <button className="my-btn" onClick={() => setText(`${Date.now()}`)}>
          setText
        </button>
      </div>
      <RenderTip />
      <InnerComponent />
    </section>
  );
};

export default CountExampleComponent;
