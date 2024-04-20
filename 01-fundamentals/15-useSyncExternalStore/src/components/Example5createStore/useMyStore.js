// import { useSyncExternalStore } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/with-selector';
import shallowEqual from 'shallowequal';

import createStore from './createStore';

const initialState = {
  count: 0,
  text: 'milkmidi',
};

const store = createStore(initialState);

const identity = (_) => _;

export default function useMyStore(
  selector = identity,
  compareEqual = shallowEqual,
) {
  return useSyncExternalStoreWithSelector(
    store.subscribe,
    store.getSnapshot,
    null,
    selector,
    compareEqual,
  );
}

export const { setState } = store;
