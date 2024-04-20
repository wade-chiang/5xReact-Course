import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';
import shallowEqual from 'shallowequal';

const subscribeResize = (listener) => {
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('resize', listener);
  };
};

export default function useWindowSizeCorrect() {
  return useSyncExternalStoreWithSelector(
    // subscribe
    subscribeResize,
    // get snapshot
    () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // getServerSnapshot
    null,
    // selector
    (value) => value,
    // isEqual
    shallowEqual,
  );
}
