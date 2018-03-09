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
// Import Labels
import { PRICING } from '../../utils/labels/homepage.js';

class Pricing extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: PRICING.title,
      subtitle: PRICING.subtitle,
      plans: PRICING.plans
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
      <Container className={'pricingContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} className={'pricingPunchline'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row xs={'12'} >
            <Col xs={'12'} md={'4'} className={'pricingFree'} >
              <PricingTable price={this.state.plans.option_1.price} plan={this.state.plans.option_1.plan} currency={this.state.plans.option_1.currency} cta={this.state.plans.option_1.cta} features={ this.state.plans.option_1.features } />
            </Col>
            <Col xs={'12'} md={'4'} className={'pricingPremium'} >
              <PricingTable price={this.state.plans.option_2.price} plan={this.state.plans.option_2.plan} currency={this.state.plans.option_2.currency} cta={this.state.plans.option_2.cta} features={ this.state.plans.option_2.features } />
            </Col>
            <Col xs={'12'} md={'4'} className={'pricingBusiness'} >
              <PricingTable price={this.state.plans.option_3.price} plan={this.state.plans.option_3.plan} currency={this.state.plans.option_3.currency} cta={this.state.plans.option_3.cta} features={ this.state.plans.option_3.features } />
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Pricing;
