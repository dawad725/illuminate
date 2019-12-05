import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pnav from './components/navbar';
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise'




const storeWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={storeWithMiddleware(rootReducer)}>
        <Router>
            <Pnav fixed="top" />
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


