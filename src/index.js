import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/styles.scss';
import './assets/fonts/GandhiSans-Bold.otf'
import './assets/fonts/GandhiSans-Regular.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
