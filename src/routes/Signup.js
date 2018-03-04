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
import * as firebaseui from 'firebaseui';
import * as authFB from '../utils/firebase/utils.js';

class Signup extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      rootDB: this.props.rootDB
    }
  }

  componentDidMount(){
    //console.log(this.props.rootDB);
    authFB._initAuth()
  }

  componentWillReceiveProps(newProps) {
    // receive props from parent
    this.setState({
      rootDB: newProps.rootDB
    });

  }


  render() {
    return (
      <div>
        <div>
          <h1>Signup</h1>
          <div id="sign-in-status"></div>
          <div id="sign-in"></div>
          <div id="account-details"></div>
        </div>
        <div id='firebaseui-auth-container' />
      </div>
    );
  }
}

export default Signup;
