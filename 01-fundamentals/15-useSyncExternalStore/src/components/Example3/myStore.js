// https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore

const myStore = {
  state: {
    count: 0,
    text: 'milkmidi',
    age: 18,
  },
  getSnapshot: () => myStore.state,
  listeners: new Set(),
  subscribe(callback) {
    myStore.listeners.add(callback);
    return () => {
      myStore.listeners.delete(callback);
    };
  },
  setState(source) {
    const newState =
      typeof source === 'function' ? source(myStore.state) : source;
    myStore.state = {
      ...myStore.state,
      ...newState,
    };
    myStore.listeners.forEach((listener) => {
      listener();
    });
  },
};
export default myStore;
