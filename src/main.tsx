import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@src/router/AppRouter.tsx';
import { Provider } from 'react-redux';
import store from '@src/redux/Store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
