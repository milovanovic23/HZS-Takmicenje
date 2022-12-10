import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoggedInContext } from './context/LoggedInContext.jsx';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoggedInContext>
      <Router>
        <App />
      </Router>
    </LoggedInContext>
  </React.StrictMode>
);
