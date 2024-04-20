import React from 'react';
import useReducerStore, { dispatch } from './useReducerStore';
import RenderTip from '../RenderTip';

const ChildCount = React.memo(() => {
  // 不會有多餘的 render 也，好神
  const count = useReducerStore((state) => state.count);
  return (
    <section data-name="store.count">
      <RenderTip />
      <h3>store.count:{count}</h3>
    </section>
  );
});

const Example = () => {
  const state = useReducerStore();
  return (
    <section data-name="Example5">
      <div className="my-code">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button
        className="my-btn"
        onClick={() => {
          dispatch({ type: 'increment' });
        }}
      >
        dispatch increment
      </button>
      <button
        className="my-btn"
        onClick={() => {
          dispatch({ type: 'text', payload: `${Date.now()}` });
        }}
      >
        dispatch text
      </button>
      <ChildCount />
    </section>
  );
};

export default Example;
