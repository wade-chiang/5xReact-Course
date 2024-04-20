/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import { actionSetValue, actionUpdateUserName } from './actions';
import reducers from './reducers';
import './css/app.scss';
import './css/style.scss';
// https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux
// TODO
const store = createStore(reducers);

/* // TODO
const store = createStore(
  reducers,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);
*/

const valueEl = document.getElementById('display_content');
function render() {
  valueEl.innerHTML = JSON.stringify(store.getState(), null, 2);
}

// TODO
render();
store.subscribe(render);

const queryClick = (selector, clickCallback) => {
  document.querySelector(selector).addEventListener('click', clickCallback);
};

queryClick('#increment', () => {
  store.dispatch({ type: 'INCREMENT' });
});

queryClick('#decrement', () => {
  store.dispatch({ type: 'DECREMENT' });
});

queryClick('#setValue', () => {
  // store.dispatch({ type: 'SET_VALUE', value: 9527 }); // Bad
  store.dispatch(actionSetValue(9999)); // Good
});

queryClick('#setUserName', () => {
  store.dispatch(actionUpdateUserName('奶綠茶')); // Good
});
