import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pnav from './components/navbar'





ReactDOM.render(
    <Router>
        <Pnav fixed="top" />
        <App />
    </Router>,
    document.getElementById('root')
);


