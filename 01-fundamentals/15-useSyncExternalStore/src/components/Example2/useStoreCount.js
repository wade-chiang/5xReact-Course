import { useSyncExternalStore } from 'react';
import myStore from './myStore';

export default function useStoreCount() {
  const count = useSyncExternalStore(
    // subscribe
    myStore.subscribe,
    // get snapshot
    () => myStore.getSnapshot().count,
  );
  return count;
}
