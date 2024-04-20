const createStore = (initialState) => {
  let state = initialState;

  const listeners = new Set();
  const setState = (source) => {
    const newState = typeof source === 'function' ? source(state) : source;
    state = {
      ...state,
      ...newState,
    };
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const getSnapshot = () => state;
  return {
    setState,
    subscribe,
    getSnapshot,
  };
};
export default createStore;
