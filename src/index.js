import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './views/public/LoginScreen';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/home' element={<App />}>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
);
