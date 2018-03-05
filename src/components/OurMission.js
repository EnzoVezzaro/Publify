import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import './OurMission.css';

class OurMission extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Our Mission',
      subtitle: 'Lorem ipsum dolor sit amet proin gravida nibh vel velit'
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
      <Container className={'ourMissionContainer'} fluid>
        <Container>
          <Row xs={'12'} className={'ourMissionPunchline'}>
            <Col xs={'12'} md={'6'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row xs={'12'} >
            <Details />
            <Details />
            <Details />
            <Details />
            <Details />
            <Details />
          </Row>
        </Container>
      </Container>
    );
  }
}

function Details(props) {
  return (
      <Col xs={'12'} md={'4'} lg={'4'} className={'ourMissionDetails'} >
        <h4>{ 'Clean Design' }</h4>
        <p>{ 'Your project looks great on any device. Content can be easily read and a user understands freely what you wanted to say him or her.'}</p>
      </Col>
  );
}

export default OurMission;
