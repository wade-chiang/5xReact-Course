import { memo } from 'react';
import RenderTip from '../RenderTip';
import useMyStore, { setState } from './useMyStore';

const ChildCount = memo(() => {
  // 不會有多餘的 render 也，好神
  const count = useMyStore((state) => state.count);
  return (
    <section data-name="store.count">
      <RenderTip />
      <h3>store.count:{count}</h3>
    </section>
  );
});

const Example = () => {
  const state = useMyStore();
  return (
    <section data-name="Example5">
      <div className="my-code">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button
        className="my-btn"
        onClick={() => {
          setState((prev) => ({
            count: prev.count + 1,
          }));
        }}
      >
        increment
      </button>
      <button
        className="my-btn"
        onClick={() => {
          setState({
            text: `${Date.now()}`,
          });
        }}
      >
        text
      </button>
      <ChildCount />
    </section>
  );
};

export default Example;
