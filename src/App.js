

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './routes/HomePage.js';
import Dashboard from './routes/Dashboard.js';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={Dashboard}/>
    </div>
  </Router>
)
export default App;
