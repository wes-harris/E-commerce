import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/layout/App.js';
import './app/layout/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
