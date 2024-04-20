/* eslint-disable no-underscore-dangle */
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import './css/app.scss';
import './css/style.scss';

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__?.(),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
