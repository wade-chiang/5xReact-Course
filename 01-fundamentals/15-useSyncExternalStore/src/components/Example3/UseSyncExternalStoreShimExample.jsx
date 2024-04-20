import { memo } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';
import shallowEqual from 'shallowequal';
import RenderTip from '../RenderTip';
import myStore from './myStore';
// https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreWithSelector.js

const UseSyncExternalStoreShimExample = () => {
  // 可以用這個套件 useSyncExternalStoreWithSelector
  const { count, age } = useSyncExternalStoreWithSelector(
    myStore.subscribe,
    myStore.getSnapshot,
    null,
    (state) => ({
      count: state.count,
      age: state.age,
    }),
    shallowEqual,
  );
  return (
    <section
      data-name="useSyncExternalStoreWithSelector"
      className="style-green"
    >
      <RenderTip />
      <h3>store.count:{count}</h3>
      <h3>store.age:{age}</h3>
    </section>
  );
};

export default memo(UseSyncExternalStoreShimExample);
