import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AuthContextProvider from './state/AuthContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
