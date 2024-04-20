import { memo } from 'react';
import shallow from 'zustand/shallow';
import RenderTip from '@/components/RenderTip';
import useStore from './useStore';

const NameComponent = memo(() => {
  const [name, dispatch] = useStore((state) => [state.name, state.dispatch], shallow);
  return (
    <section data-name="NameComponent">
      <RenderTip />
      <h1>name:{name}</h1>
      <button
        className="button"
        onClick={() => {
          dispatch({ type: 'setName', payload: `${Date.now()}` });
        }}
      >
        setName
      </button>
    </section>
  );
});

const Example = () => {
  //
  const [count, dispatch] = useStore((state) => [state.count, state.dispatch], shallow);

  return (
    <section data-name="Example4">
      <h3>count:{count}</h3>
      <button
        className="my-btn"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        className="my-btn"
        onClick={() => {
          dispatch({ type: 'decrement' });
        }}
      >
        -
      </button>
      <RenderTip />
      <NameComponent />
    </section>
  );
};

export default Example;
