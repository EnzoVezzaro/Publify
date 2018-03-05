import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
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
                  <h1 style={{ color:'#7954B6' }} >{ this.state.title }</h1>
                  <p>{ this.state.subtitle }</p>
                </Col>
              </Row>
              <Row className={'customizeDetails'}>
                <Details />
                <Details />
                <Details />
              </Row>
            </Col>
            <Col xs={'12'} md={'6'} className={'customizeRight'} >
              <img src={require('../assets/img/customizeiPhone.svg')} />
            </Col>
          </Row>
      </Container>
    );
  }
}

function Details(props) {
  return (
      <Col xs={'12'} className={'customizeDetails'} >
        <h4>{ 'Clean Design' }</h4>
        <p>{ 'Your project looks great on any device. Content can be easily read and a user understands freely what you wanted to say him or her.'}</p>
      </Col>
  );
}

export default CustomizeYourWay;
