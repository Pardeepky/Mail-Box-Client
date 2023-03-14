import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginScreen from './views/public/LoginScreen';
import store from './store';
import ComposeMail from './views/private/ComposeMail';
import MailBox from './views/private/MailBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/home' element={<App />}>
            <Route path='/home' element={<MailBox />} />
            <Route path='/home/compose' element={<ComposeMail />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
