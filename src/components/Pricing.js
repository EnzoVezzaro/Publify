import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import MyButton from "./MyButton.js";
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

class PricingTable extends Pricing{
  constructor(props){
    super(props);

    this.state = {
      planTitle: this.props.planTitle,
      currency: this.props.currency,
      price: this.props.price,
      cta: this.props.cta,
      freeFeatures: [ 'Access to our Apps', 'Customization', 'Account Info' ],
      premiumFeatures: [ 'Access to our Apps', 'Customization', 'Account Info', 'No Ads' ],
      businessFeatures: [ 'Business', 'Customization', 'Account Info', 'No Ads'],
      errorFeatures: [ 'empty'],
    }

    switch(this.state.planTitle) {
       case "free": {
          this.state.plan = this.state.freeFeatures;
          break;
       }
       case "premium": {
          this.state.plan = this.state.premiumFeatures;
          break;
       }
       case "business": {
          this.state.plan = this.state.businessFeatures;
          break;
       }
       default: {
          this.state.plan = this.state.errorFeatures;
          break;
       }
    }

  }

  render() {
    return(
      <Row className={'princingTable'} >
        <Col>
          <Row className={'princingTablePunchline'}>
            <h4>{ this.state.planTitle }</h4>
          </Row>
          <Row className={'princingTablePrices'}>
            <span className={'princingTableCurrency'} >{ this.state.currency }</span>
            <span className={'princingTablePrice'} >{ this.state.price }</span>
            <span className={'princingMounth'} >{ '/month'.toUpperCase() }</span>
          </Row>
          <Row>
            <ul className={'princingTableFeatures'}>
              { this.state.plan.map((feature,i) => <li key={i}><div></div>{ feature }</li> ) }
            </ul>
          </Row>
          <Row className={'princingTableCTA'}>
            <MyButton label={this.state.cta} color={'primary'} link={''} ></MyButton>
          </Row>
        </Col>
      </Row>
    );
  };
}

export default Pricing;
