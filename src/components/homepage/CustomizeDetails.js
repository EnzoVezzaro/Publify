import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import './CustomizeDetails.css';

class CustomizeDetails extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      title: this.props.title,
      body: this.props.body
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
      <Col xs={'12'} className={'customizeDetails'} >
        <h4>{ this.state.title }</h4>
        <p>{ this.state.body }</p>
      </Col>
    );
  }
}

export default CustomizeDetails;
