import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
import './Hero.css';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';
// Components
import Menu from "./Menu.js";
import MyButton from "./MyButton.js";
// Style
import { Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Create Your Own App For Your Feature Movies',
      subtitle: 'We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur bradipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  }

  componentDidMount(){

  }

  componentWillReceiveProps(newProps) {
    // receive props from parent
    /*
    this.setState({
      rootDB: newProps.rootDB
    });
    */

  }


  render() {
    return (
      <Container className={'heroContainer'}>
        <Row xs={'12'} noGutters={true} className={'heroBackgroundLayers'}>
          <Col>
            <Row xs={'12'} noGutters={true} className={'heroBackgroundLayer1'}>
              <Col className={'heroContent'} sm={{ size: 6, offset: 6 }} >
                <h1 className={'heroPuchline'}>{ this.state.title }</h1>
                <h5 className={'heroSubtitle'}>{ this.state.subtitle }</h5>
                <MyButton label={'get starter'} color={'primary'}></MyButton>
              </Col>
            </Row>
            <Row xs={'12'} noGutters={true} className={'heroBackgroundLayer2'} />
            <Row xs={'12'} noGutters={true} className={'heroBackgroundLayer3'} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Hero;
