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
import './PricingTable.css';

class PricingTable extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      planTitle: this.props.plan,
      currency: this.props.currency,
      price: this.props.price,
      cta: this.props.cta,
      features: this.props.features,
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
              { this.state.features.map((feature,i) => <li key={i}><div></div>{ feature }</li> ) }
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

export default PricingTable;
