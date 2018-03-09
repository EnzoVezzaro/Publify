import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Components
import Menu from "../../components/homepage/Menu.js";
import DetailList from "../../components/homepage/DetailList.js";
import MyCards from "../../components/homepage/MyCards.js";
// Style
import { Container, Row, Col } from 'reactstrap';
import './Features.css';
// Import Labels
import { FEATURES } from '../../utils/labels/homepage.js';

class Features extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: FEATURES.title,
      subtitle: FEATURES.subtitle,
      cards: FEATURES.cards,
      details: FEATURES.details,
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

  // TODO: Move require() to component (MyCards)
  // WARNING: Require() can't take this.state at the moment 03/18

  render() {
    return (
      <Container className={'featuresContainer'}>
        <Row xs={'12'} className={'featuresPunchline'}>
          <Col sm={{ size: 6, offset: 3 }} >
            <h2>{ this.state.title }</h2>
            <p>{ this.state.subtitle }</p>
          </Col>
        </Row>
        <Row xs={'12'} className={'featuresDetails'}>
          <Col sm={{ size: 5 }} style={{ marginTop: '4%' }}>
            <MyCards title={ this.state.cards.option_1.title } subtitle={ this.state.subtitle } image={ require('../../assets/img/features_customization.jpg') } id={ this.state.cards.option_1.id } />
            <MyCards title={ this.state.cards.option_1.title } subtitle={ this.state.subtitle } image={ require('../../assets/img/features_customization.jpg') } id={ this.state.cards.option_2.id } />
            <MyCards title={ this.state.cards.option_1.title } subtitle={ this.state.subtitle } image={ require('../../assets/img/features_customization.jpg') } id={ this.state.cards.option_3.id } />
          </Col>
          <Col sm={{ size: 5 }} >
            <DetailList
              title={this.state.details.option_1.title}
              subtitle={this.state.details.option_1.subtitle}
              image={require('../../assets/icons/pcIcon.svg')} />
            <DetailList
              title={this.state.details.option_2.title}
              subtitle={this.state.details.option_2.subtitle}
              image={require('../../assets/icons/customerService.svg')} />
            <DetailList
              title={this.state.details.option_3.title}
              subtitle={this.state.details.option_3.subtitle}
              image={require('../../assets/icons/customazible.svg')} />
            <DetailList
              title={this.state.details.option_4.title}
              subtitle={this.state.details.option_4.subtitle}
              image={require('../../assets/icons/multipleApps.svg')} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Features;
