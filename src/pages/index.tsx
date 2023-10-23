import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (container === null) {
  throw new Error('root element not found');
}
const root = createRoot(container);
root.render(<App />);
