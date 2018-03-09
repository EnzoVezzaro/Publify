import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import CustomizeDetails from '../../components/homepage/CustomizeDetails.js';
import './CustomizeYourWay.css';
// Import Labels
import { CUSTOMIZEYOURWAY } from '../../utils/labels/homepage.js';

class CustomizeYourWay extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: CUSTOMIZEYOURWAY.title,
      subtitle: CUSTOMIZEYOURWAY.subtitle,
      details: CUSTOMIZEYOURWAY.details
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
      <Container className={'customizeContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} md={'6'} className={'customizeLeft'} >
              <Row className={'customizePunchline'}>
                <Col xs={'12'} >
                  <h2>{ this.state.title }</h2>
                  <p>{ this.state.subtitle }</p>
                </Col>
              </Row>
              <Row className={'customizeDetails'}>
                <CustomizeDetails title={ this.state.details.option_1.title } body={ this.state.details.option_1.body } />
                <CustomizeDetails title={ this.state.details.option_2.title } body={ this.state.details.option_2.body } />
                <CustomizeDetails title={ this.state.details.option_3.title } body={ this.state.details.option_3.body } />
              </Row>
            </Col>
            <Col xs={'12'} md={'6'} className={'customizeRight'} >
              <img src={require('../../assets/img/customizeiPhone.svg')} />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default CustomizeYourWay;
