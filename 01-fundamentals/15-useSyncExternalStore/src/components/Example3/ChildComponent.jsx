import { useSyncExternalStore, memo } from 'react';
import RenderTip from '../RenderTip';
import myStore from './myStore';

const ChildComponent = (props) => {
  const { property } = props;
  // 不會有多餘的 render 也，好神
  const value = useSyncExternalStore(
    myStore.subscribe,
    () => myStore.getSnapshot()[property],
  );
  return (
    <section data-name={property}>
      <RenderTip />
      <h3>store.count:{value}</h3>
    </section>
  );
};
export default memo(ChildComponent);
