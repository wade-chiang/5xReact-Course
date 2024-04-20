import { memo } from 'react';
import RenderTip from '@/components/RenderTip';
import useCountStore from './useCountStore';

const Counter = () => {
  const text = useCountStore((state) => state.text);
  return (
    <section data-name="Counter">
      <h1>{text}</h1>
      <RenderTip />
    </section>
  );
};

export default memo(Counter);
