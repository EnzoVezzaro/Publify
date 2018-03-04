import React from 'react';
import ReactDOM from 'react-dom';
//import './css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Base.css';
import App from './App';
//import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
