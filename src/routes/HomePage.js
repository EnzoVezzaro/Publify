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
import Menu from "../components/commons/Menu.js";
import Hero from "../components/commons/Hero.js";
import Features from "../sections/homepage/Features.js";
import VideoHero from "../sections/homepage/VideoHero.js";
import OurMission from "../sections/homepage/OurMission.js";
import CustomizeYourWay from "../sections/homepage/CustomizeYourWay.js";
import Pricing from "../sections/homepage/Pricing.js";
import Testimonials from "../sections/homepage/Testimonials.js";
import Blog from "../sections/homepage/Blog.js";
import Download from "../sections/homepage/Download.js";
import Footer from "../sections/homepage/Footer.js";
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

          <Hero isHome={true} />

          <Features />

          <VideoHero />

          <OurMission />

          <CustomizeYourWay />

          <Pricing />

          <Testimonials />

          <Blog />

          <Download />

          <Footer />

      </div>
    );
  }
}

export default HomePage;
