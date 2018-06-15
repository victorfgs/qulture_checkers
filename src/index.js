import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }


ReactDOM.render(<Provider template={AlertTemplate} {...options}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
