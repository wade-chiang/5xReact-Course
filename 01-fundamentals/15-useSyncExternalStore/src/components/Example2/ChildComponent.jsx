import { memo } from 'react';
import useStoreCount from './useStoreCount';

const ChildComponent = () => {
  const count = useStoreCount();
  return (
    <section data-name="ChildComponent">
      <h2>count:{count}</h2>
    </section>
  );
};
export default memo(ChildComponent);
