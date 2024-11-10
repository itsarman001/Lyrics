import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utils/stateProvider';
import { AudioProvider } from './utils/AudioContext'; // Make sure the path is correct
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <AudioProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AudioProvider>
    </StateProvider>
  </React.StrictMode>
);
