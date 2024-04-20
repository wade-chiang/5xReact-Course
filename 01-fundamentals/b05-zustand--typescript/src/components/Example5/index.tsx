import RenderTip from '@/components/RenderTip';
import useCountStore from '../Example1/useCountStore';

// TODO: 1. useCountStore.getState()
const { increment, decrement, setCount, setText } = useCountStore.getState();

const Example = () => {
  const count = useCountStore((s) => s.count);

  return (
    <section data-name="Example5">
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
    </section>
  );
};

export default Example;
