import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/app.scss';
import './css/style.scss';

console.info(`${process.env.NODE_ENV}_${process.env.BUILD_TIME}`);
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
