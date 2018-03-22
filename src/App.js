
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

    // Initialize Firebase || NOTE: Build Env Var in Netlify
    this.state.config = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
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
