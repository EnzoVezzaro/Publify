import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  buttom
} from 'react-router-dom';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
//import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth.js';
// Style
import { Container, Row, Col } from 'reactstrap';
// Components
import Hero from "../components/commons/Hero.js";
import FormAuth from "../components/authentication/FormAuth.js";
import FooterDashboard from "../components/dashboard/FooterDashboard.js";

import * as authFB from '../utils/firebase/utils.js';

class Authentication extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if (user){
            window.location.replace("/dashboard");
          }
        }
    );
  }

  render() {
    return (
      <div>

        <Hero />

        <Container fluid>
          <FormAuth />
        </Container>

        <FooterDashboard />

      </div>
    );
  }
}

export default Authentication;
