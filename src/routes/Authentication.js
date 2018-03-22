import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  buttom
} from 'react-router-dom';
import logo from './../logo.svg';
import './../App.css';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
//import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth.js';

import * as authFB from '../utils/firebase/utils.js';

class Authentication extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      signedIn: false // Local signed-in state.
    }
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '/'
    ,
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => this.setState({signedIn: !!user})
    );
  }

  render() {
    if (!this.state.signedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default Authentication;
