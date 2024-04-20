import componentGenerator from './components/index.js';

export default function (/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator('component', componentGenerator);
}
