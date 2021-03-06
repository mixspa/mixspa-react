import React from 'react';
import ReactDOM from 'react-dom';
import Mixspa from '@mixspa/core';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppContainer from '../src/AppContainer';
import './index.scss';

Mixspa.register({
  "id": "react-app-one",
  "tag": "react-app-one",
  "assets": ["/app-one.bundle.js"]
});
Mixspa.register({
  "id": "react-app-two",
  "tag": "react-app-two",
  "assets": ["/app-two.bundle.js"]
});

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <App />
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);
