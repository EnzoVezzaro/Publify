import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';
// Components
import Menu from "../../components/homepage/Menu.js";
import DetailList from "../../components/homepage/DetailList.js";
import MyCards from "../../components/homepage/MyCards.js";
// Style
import { Container, Row, Col } from 'reactstrap';
import './VideoHero.css';

class VideoHero extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Lorem ipsum dolor sit amet proin gravida nibh vel velit',
      subtitle: 'Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at saepe perspiciatis eos quasi laudantium sunt ad quaerat?'
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
      <Container className={'videoContainer'} fluid={true} >
        <Row xs={'12'} className={'videoContent'}>
          <Col sm={{ size: 6 }} className={'videoPlay'} >
            <img src={require('../../assets/icons/videoPlay.svg')} className={'videoPlayImg'} />
          </Col>
          <Col sm={{ size: 6 }} className={'videoPunchline'} >
            <h3>{ this.state.title }</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VideoHero;
