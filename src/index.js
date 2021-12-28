import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Tracker } from './components/Tracker';
import './index.css';
import { Grommet } from 'grommet';


ReactDOM.render(
  <React.StrictMode>
    <Grommet>
    <Router>
    <Tracker />
    </Router>
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

