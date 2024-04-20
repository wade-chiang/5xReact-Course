import ReactDOM from 'react-dom/client';
import App from './components/App';
import './css/app.scss';
import './css/style.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
