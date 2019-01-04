import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import * as firebase from 'firebase';
import config from './fire';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
firebase.initializeApp(config);

const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
