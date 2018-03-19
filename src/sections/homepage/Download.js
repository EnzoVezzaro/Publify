import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import './Download.css';
// Import Labels
import { DOWNLOAD } from '../../utils/labels/homepage.js';

class Download extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: DOWNLOAD.title,
      subtitle: DOWNLOAD.subtitle,
      googlePlay: require('../../assets/img/googlePlayIcon.svg'),
      appleStore: require('../../assets/img/appleStoreIcon.svg')
    }

  }

  componentWillMount(){
    //LABELS.setLanguage('it');
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
      <Container className={'downloadContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} md={{ size: 4, offset: 4 }} className={'downloadPunchline'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row xs={'12'} >
            <Col xs={'12'} md={'6'} className={'downloadAppleStore'} >
              <img className={'downloadIcons'} src={ this.state.appleStore } />
            </Col>
            <Col xs={'12'} md={'6'} className={'downloadGooglePlay'} >
              <img className={'downloadIcons'} src={ this.state.googlePlay } />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Download;
