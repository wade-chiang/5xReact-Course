import { useSyncExternalStore, memo } from 'react';
import RenderTip from '../RenderTip';
import myStore from './myStore';

const ButButBut = () => {
  // 人生就是這個 but，useSyncExternalStore 是使用 Object.is 判斷要不要更新
  const { count, age } = useSyncExternalStore(
    myStore.subscribe,
    myStore.getSnapshot,
  );
  return (
    <section data-name="ButButBut" className="style-red" data-gradient>
      <RenderTip />
      <h3>store.count:{count}</h3>
      <h3>store.age:{age}</h3>
    </section>
  );
};
export default memo(ButButBut);
