
// Main Component
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';
// Routing
import HomePage from './routes/HomePage.js';
import Dashboard from './routes/Dashboard.js';
import Authentication from './routes/Authentication.js';
import Signup from './routes/Signup.js';
// Components

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
    }

    // Initialize Firebase // TODO: Move this to env.file
    this.state.config = {
      apiKey: process.env.REACT_APP_FB_APIKEY,
      authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_FB_DATABASEURL,
      projectId: process.env.REACT_APP_FB_PROJECTID,
      storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_FB_MESSAGESENDERID
    };

    firebase.initializeApp(this.state.config);
    // Take db to state

  }

  componentWillMount(){

  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <HomePage FBConfig={this.state.config} />}/>
          <Route path="/authentication" render={() => <Authentication FBConfig={this.state.config} />}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
