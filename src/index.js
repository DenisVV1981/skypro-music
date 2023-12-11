import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FluentProvider theme={webDarkTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);

