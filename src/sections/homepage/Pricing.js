import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import MyButton from "../../components/homepage/MyButton.js";
import PricingTable from "../../components/homepage/PricingTable.js";
import './Pricing.css';

class Pricing extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: 'Pricing Packages',
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
      <Container className={'pricingContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} className={'pricingPunchline'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row xs={'12'} >
            <Col xs={'12'} md={'4'} className={'pricingFree'} >
              <PricingTable price={'0'} planTitle={'free'} currency={'$'} cta={"it's free!"} />
            </Col>
            <Col xs={'12'} md={'4'} className={'pricingPremium'} >
              <PricingTable price={'19'} planTitle={'premium'} currency={'$'} cta={"Choose plan"} />
            </Col>
            <Col xs={'12'} md={'4'} className={'pricingBusiness'} >
              <PricingTable price={'50'} planTitle={'business'} currency={'$'} cta={"Choose plan"} />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Pricing;
