import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/english-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
