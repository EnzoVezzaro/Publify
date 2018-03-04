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

// TODO: Mover en el render de poco en poco
/*

<Row className={'MissionContainer'}>
  <Row className={'MissionPuchLine'}>
    <Col>.col</Col>
  </Row>
  <Row className={'MissionTable'}>
    <Col>.col</Col>
    <Col>.col</Col>
    <Col>.col</Col>
  </Row>
</Row>
<Row className={'CustomizationContainer'}>
  <Col>
    <Row className={'CustomizationPuchLine'}>
    </Row>
    <Row className={'CustomizationTable'}>
    </Row>
  </Col>
  <Col>
    <Row className={'CustomizationTable'}>
    </Row>
  </Col>
</Row>
<Row className={'PricingContainer'}>
  <Row className={'PricingPuchLine'}>
  </Row>
  <Row className={'PricingTable'}>
  </Row>
</Row>
<Row className={'TestimonialsContainer'}>
  <Row className={'TestimonialsPuchLine'}>
  </Row>
  <Row className={'TestimonialsCarousel'}>
  </Row>
</Row>
<Row className={'BlogContainer'}>
  <Row className={'BlogPuchLine'}>
  </Row>
  <Row className={'BlogPosts'}>
  </Row>
</Row>
<Row className={'StoresContainer'}>
  <Row className={'StoresPuchLine'}>
  </Row>
  <Row className={'StoresLogos'}>
  </Row>
</Row>
<Row className={'FooterContainer'}>
  <Row className={'FooterPuchLine'}>
  </Row>
</Row>

*/

  render() {
    return (
      <div>
        <Menu />

          <Hero />

          <Features />

          <VideoHero />

      </div>
    );
  }
}

export default HomePage;
