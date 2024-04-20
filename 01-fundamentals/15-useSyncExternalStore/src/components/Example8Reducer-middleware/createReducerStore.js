const createReducerStore = (reducer, initialState, middlewares = []) => {
  let state = initialState;

  const listeners = new Set();
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };

  const getSnapshot = () => state;

  // TODO
  // https://github.com/gvergnaud/use-middleware-reducer/blob/master/src/index.ts
  const middlewareAPI = {
    getState: getSnapshot,
    dispatch,
  };
  const dispatchWithMiddleware = middlewares
    .map((middleware) => middleware(middlewareAPI))
    .reduceRight((acc, middleware) => middleware(acc), dispatch);
  return {
    dispatch: dispatchWithMiddleware,
    subscribe,
    getSnapshot,
  };
};
export default createReducerStore;
