/* eslint-disable no-underscore-dangle */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

let preloadedState = null;
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__?.();
}
const store = createStore(reducers, preloadedState);

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
