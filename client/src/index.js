import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoggedInContext } from './context/LoggedInContext.jsx';
import App from './App.jsx';
import { AuthContext } from './context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <LoggedInContext>
        <Router>
          <App />
        </Router>
      </LoggedInContext>
    </AuthContext>
  </React.StrictMode>
);
