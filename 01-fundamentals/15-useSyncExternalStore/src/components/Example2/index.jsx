import { useSyncExternalStore } from 'react';
import myStore from './myStore';
import ChildComponent from './ChildComponent';

const Example = () => {
  const count = useSyncExternalStore(
    // subscribe
    myStore.subscribe,
    // get snapshot
    () => myStore.getSnapshot().count,
  );

  return (
    <section data-name="Example2">
      <h1>count:{count}</h1>
      <button
        className="my-btn"
        onClick={() => {
          myStore.increment();
        }}
      >
        Increment
      </button>
      <ChildComponent />
    </section>
  );
};
export default Example;
