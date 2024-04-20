import { useSyncExternalStore } from 'react';
import UseSyncExternalStoreShimExample from './UseSyncExternalStoreShimExample';
import myStore from './myStore';
import ChildComponent from './ChildComponent';
import ButButButComponent from './ButButButComponent';

const Example = () => {
  const state = useSyncExternalStore(myStore.subscribe, myStore.getSnapshot);
  return (
    <section data-name="Example3">
      <div className="my-code">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
      <button
        className="my-btn"
        onClick={() => {
          myStore.setState((prevState) => ({
            count: prevState.count + 1,
          }));
        }}
      >
        increment
      </button>
      <button
        className="my-btn"
        onClick={() => {
          myStore.setState((prevState) => ({
            age: prevState.age + 1,
          }));
        }}
      >
        age
      </button>
      <button
        className="my-btn"
        onClick={() => {
          myStore.setState({
            text: `${Date.now()}`,
          });
        }}
      >
        text
      </button>
      <ChildComponent property="count" />
      <ChildComponent property="text" />
      <ButButButComponent />
      <UseSyncExternalStoreShimExample />
    </section>
  );
};

export default Example;
