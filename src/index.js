import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
