import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './context/UserContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

import 'bootstrap/dist/js/bootstrap.js';

