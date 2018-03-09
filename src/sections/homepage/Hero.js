import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
import './Hero.css';
// Components
import Menu from "../../components/homepage/Menu.js";
import MyButton from "../../components/homepage/MyButton.js";
// Style
import { Container, Row, Col } from 'reactstrap';
// Import Labels
import { HERO } from '../../utils/labels/homepage.js';

class Hero extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: HERO.title,
      subtitle: HERO.subtitle,
      cta: HERO.cta,
      cover: HERO.cover
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
      <Container className={'heroContainer'} style={{ backgroundImage: `url(${this.state.cover})`}}>
        <Row xs={'12'} noGutters={true} className={'heroBackgroundLayers'}>
          <Col>
            <Row xs={'12'} noGutters={true} className={'heroBackgroundLayer1'}>
              <Col className={'heroContent'} sm={{ size: 6, offset: 6 }} >
                <h1 className={'heroPuchline'}>{ this.state.title }</h1>
                <h5 className={'heroSubtitle'}>{ this.state.subtitle }</h5>
                <MyButton label={this.state.cta} color={'primary'} link={''}></MyButton>
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
