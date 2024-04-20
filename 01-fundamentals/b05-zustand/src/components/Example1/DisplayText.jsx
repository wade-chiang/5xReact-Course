import { memo } from 'react';
import RenderTip from '@/components/RenderTip';
import shallow from 'zustand/shallow';
import useCountStore from './useCountStore';

const DisplayText = () => {
  // Bad
  const { count, increment } = useCountStore();

  // correct
  /* const { count, increment } = useCountStore(
    (state) => ({
      count: state.count,
      increment: state.increment,
    }),
    shallow,
  ); */
  return (
    <section data-name="DisplayText">
      <h1>{count}</h1>
      <button className="my-btn" onClick={increment}>
        Increment
      </button>
      <RenderTip />
    </section>
  );
};

export default memo(DisplayText);
