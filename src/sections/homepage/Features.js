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
import './Features.css';

class Features extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Amazing Features',
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
      <Container className={'featuresContainer'}>
        <Row xs={'12'} className={'featuresPunchline'}>
          <Col sm={{ size: 6, offset: 3 }} >
            <h2>{ this.state.title }</h2>
            <p>{ this.state.subtitle }</p>
          </Col>
        </Row>
        <Row xs={'12'} className={'featuresDetails'}>
          <Col sm={{ size: 5 }} style={{ marginTop: '4%' }}>
            <MyCards title={'Customization'} subtitle={'style the way you want'} image={require('../../assets/img/features_customization.jpg')} id={'featuresCard1'} />
            <MyCards title={'Customization'} subtitle={'style the way you want'} image={require('../../assets/img/features_customization.jpg')} id={'featuresCard2'} />
            <MyCards title={'Customization'} subtitle={'style the way you want'} image={require('../../assets/img/features_customization.jpg')} id={'featuresCard3'} />
          </Col>
          <Col sm={{ size: 5 }} >
            <DetailList
              title={'Clean Design'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicingelitr eiciendis autem aperiam.'}
              image={require('../../assets/icons/pcIcon.svg')} />
            <DetailList
              title={'Dedicated Support'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicingelitr eiciendis autem aperiam.'}
              image={require('../../assets/icons/customerService.svg')} />
            <DetailList
              title={'Customize Your Apps'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicingelitr eiciendis autem aperiam.'}
              image={require('../../assets/icons/customazible.svg')} />
            <DetailList
              title={'Multiple Apps'}
              subtitle={'Lorem ipsum dolor sit amet, consectetur adipisicingelitr eiciendis autem aperiam.'}
              image={require('../../assets/icons/multipleApps.svg')} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
