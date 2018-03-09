import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import TestimonialsCarousel from "../../components/homepage/TestimonialsCarousel.js";
import './Testimonials.css';
// Import Labels
import { TESTIMONIAL } from '../../utils/labels/homepage.js';

class Testimonials extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: TESTIMONIAL.title,
      subtitle: TESTIMONIAL.subtitle,
      items: TESTIMONIAL.items
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
      <Container className={'testmonialContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} className={'testmonialPunchline'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row xs={'12'} className={'testimonialCarousel'}>
            <TestimonialsCarousel items={this.state.items} />
          </Row>
      </Container>
    );
  }
}

export default Testimonials;
