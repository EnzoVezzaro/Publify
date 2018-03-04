import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './../logo.svg';
import './../App.css';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';
// Firebase Calls
import * as callsDB from '../utils/firebase/getData.js';
import * as authFB from '../utils/firebase/utils.js';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state ={
      rootDB: '',
      email: ''
    }
  }

  componentDidMount(){
    //console.log(this.props.rootDB);
    //authFB._initAuth()
    let user = 1;
    let self = this;
    // TODO: Connect users to firebase auth
    let userData = firebase.database().ref().child(`users/${user}/account/`)
    //let users = firebase.database().ref().child(`users/1/account/`)
    userData.on('value', function(snapshot) {
      // TODO: Ringrazia dado per il self pattern
      self.setState({ rootDB : snapshot.val(), email: snapshot.val().email })
    });
  }

  render() {
    return (
      <div>
        <h2>{ `Ciao, ${this.state.email}` }</h2>
      </div>
    );
  }
}

export default Dashboard;
