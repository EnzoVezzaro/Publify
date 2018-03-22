import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import './Footer.css';
// Import Labels
import { FOOTER } from '../../utils/labels/homepage.js';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: FOOTER.title,
      subtitle: FOOTER.subtitle,
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
      <Container className={'footerContainer'} fluid={true} >
        <Container className={'headerFooter'} fluid={true}>
        </Container>
      </Container>
    );
  }
}

export default Footer;
