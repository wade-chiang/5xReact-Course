const myStore = {
  state: {
    count: 1,
  },
  getSnapshot: () => myStore.state,
  listeners: new Set(),
  subscribe(listener) {
    myStore.listeners.add(listener);
    return () => {
      myStore.listeners.delete(listener);
    };
  },
  increment() {
    myStore.state.count += 1;
    myStore.listeners.forEach((listener) => {
      listener();
    });
  },
};

export default myStore;
