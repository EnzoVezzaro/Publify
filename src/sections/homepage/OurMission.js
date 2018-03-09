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
// Import Labels
import { OURMISSION } from '../../utils/labels/homepage.js';

class OurMission extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: OURMISSION.title,
      body: OURMISSION.body,
      details: OURMISSION.details
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
              <p>{ this.state.body }</p>
            </Col>
          </Row>
          <Row xs={'12'} >
            <OurMissionDetails title={ this.state.details.option_1.title } body={ this.state.details.option_1.body } />
            <OurMissionDetails title={ this.state.details.option_2.title } body={ this.state.details.option_2.body } />
            <OurMissionDetails title={ this.state.details.option_3.title } body={ this.state.details.option_3.body } />
            <OurMissionDetails title={ this.state.details.option_4.title } body={ this.state.details.option_4.body } />
            <OurMissionDetails title={ this.state.details.option_5.title } body={ this.state.details.option_5.body } />
            <OurMissionDetails title={ this.state.details.option_6.title } body={ this.state.details.option_6.body } />
          </Row>
        </Container>
      </Container>
    );
  }
}

function OurMissionDetails(props) {
  return (
      <Col xs={'12'} md={'4'} lg={'4'} className={'ourMissionDetails'} >
        <h4>{ props.title }</h4>
        <p>{ props.body }</p>
      </Col>
  );
}

export default OurMission;
