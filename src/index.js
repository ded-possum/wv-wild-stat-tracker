import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Tracker } from './components/Tracker';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Tracker />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

