import { useSyncExternalStore } from 'react';

const subscribeResize = (listener) => {
  window.addEventListener('resize', listener);
  return () => {
    window.removeEventListener('resize', listener);
  };
};

export default function useWindowSize() {
  // 這是錯誤的寫法，會得到  Maximum update depth exceeded.
  return useSyncExternalStore(subscribeResize, () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });
}
