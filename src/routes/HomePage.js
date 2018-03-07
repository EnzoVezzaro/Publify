import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  buttom
} from 'react-router-dom';
import logo from './../logo.svg';
// Style
import { Container, Row, Col } from 'reactstrap';

// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';
// Components
import Menu from "../components/Menu.js";
import Hero from "../components/Hero.js";
import Features from "../components/Features.js";
import VideoHero from "../components/VideoHero.js";
import OurMission from "../components/OurMission.js";
import CustomizeYourWay from "../components/CustomizeYourWay.js";
import Pricing from "../components/Pricing.js";
import "../css/Containers.css";

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      rootDB: this.props.rootDB
    }
  }

  componentDidMount(){

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
        <Menu />

          <Hero />

          <Features />

          <VideoHero />

          <OurMission />

          <CustomizeYourWay />

          <Pricing />

      </div>
    );
  }
}

export default HomePage;
