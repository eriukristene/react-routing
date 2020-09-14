import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// need to wrap something in BrowserRouter for routing to work
// can also do this in App.js but here we are doing it here
// this enables routing features in the entire application
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
