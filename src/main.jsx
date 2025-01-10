import { createRoot } from 'react-dom/client'
import React from 'react';
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
