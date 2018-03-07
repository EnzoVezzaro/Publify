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

class CustomizeYourWay extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Customize Your Way',
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
                <CustomizeDetails />
                <CustomizeDetails />
                <CustomizeDetails />
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
