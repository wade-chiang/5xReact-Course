const createReducerStore = (reducer, initialState) => {
  let state = initialState;

  const listeners = new Set();
  // TODO 換成 dispatch
  const dispatch = (action) => {
    state = reducer(state, action); // 這裡換成 reducer
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
    dispatch,
    subscribe,
    getSnapshot,
  };
};
export default createReducerStore;
