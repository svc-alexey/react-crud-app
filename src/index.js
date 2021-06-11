import React from 'react';
import ReactDOM from 'react-dom';
import CRUDApp from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <CRUDApp/>,
    document.getElementById('root'));
registerServiceWorker();
