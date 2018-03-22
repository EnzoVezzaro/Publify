import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
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
// Components
import Menu from "../components/commons/Menu.js";
import Hero from "../components/commons/Hero.js";
import Content from "../sections/dashboard/Content.js";
import FooterDashboard from "../components/dashboard/FooterDashboard.js";

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state ={
      rootDB: '',
      email: '',
      signedIn: false // Local signed-in state.
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged(
        (user) => {
          if (user){
            this.setState({signedIn: !!user})
          } else {
            setTimeout(()=>{
              window.location.replace("/authentication");
            }, 1500);
          }
        }
    );
    //console.log(this.props.rootDB);
    //authFB._initAuth()
    /*
    let user = 1;
    let self = this;
    // TODO: Connect users to firebase auth
    let userData = firebase.database().ref().child(`users/${user}/account/`)
    //let users = firebase.database().ref().child(`users/1/account/`)
    userData.on('value', function(snapshot) {
      // TODO: Ringrazia dado per il self pattern
      self.setState({ rootDB : snapshot.val(), email: snapshot.val().email })
    });
    */
  }

  render() {
    return (
      <div>
        {
          this.state.signedIn &&
          <div>

            <Menu />

            <Hero />

            <Content />

            <FooterDashboard />

          </div>
        }
        {
          !this.state.signedIn &&
            <h4>Loading!!!!</h4> // TODO: loader has to explain that 'you don't have an account, we can help you registering'
        }
      </div>
    );

  }
}

export default Dashboard;
