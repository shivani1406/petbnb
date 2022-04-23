import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

axios.defaults.baseURL = 'http://localhost:8080/';
ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
<App />
</AlertProvider>
, document.getElementById('root'));

serviceWorker.unregister();
