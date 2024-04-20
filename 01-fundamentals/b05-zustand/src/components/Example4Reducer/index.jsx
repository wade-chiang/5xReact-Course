import { memo } from 'react';
import RenderTip from '@/components/RenderTip';
import useStore from './useStore';

const { dispatch } = useStore.getState();
const NameComponent = memo(() => {
  const name = useStore((state) => state.name);
  return (
    <section data-name="NameComponent">
      <RenderTip />
      <h1>{name}</h1>
      <button
        className="my-btn"
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
  const count = useStore((state) => state.count);

  return (
    <section data-name="Example4">
      <h3>count:{count}</h3>
      <button
        className="my-tab-btn"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        +
      </button>
      <button
        className="my-tab-btn"
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
