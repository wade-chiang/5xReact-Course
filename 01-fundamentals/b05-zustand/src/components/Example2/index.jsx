import { memo } from 'react';
import RenderTip from '@/components/RenderTip';
import useCountStore from '../Example1/useCountStore';

const { increment, decrement, setCount, setText } = useCountStore.getState();

const InnerComponent = memo(() => {
  const text = useCountStore((state) => state.text);
  return (
    <section data-name="InnerComponent">
      <h1>{text}</h1>
      <RenderTip />
    </section>
  );
});

const Example = () => {
  const count = useCountStore((state) => state.count);
  return (
    <section data-name="Example2">
      <h3>count:{count}</h3>
      <button
        className="my-tab-btn"
        onClick={() => {
          useCountStore.setState((state) => ({
            count: state.count + 1,
          }));
        }}
      >
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
      <RenderTip />
      <InnerComponent />
    </section>
  );
};

export default memo(Example);
