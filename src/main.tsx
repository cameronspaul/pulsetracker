import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import favicon from './assets/images/favicon.ico';

// Set favicon
const faviconElement = document.querySelector('link[data-favicon]');
if (faviconElement) {
  faviconElement.setAttribute('href', favicon);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
