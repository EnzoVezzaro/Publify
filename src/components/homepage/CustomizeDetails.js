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
      title: 'Customize Your Way',
      subtitle: 'Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at saepe perspiciatis eos quasi laudantium sunt ad quaerat?'
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
        <h4>{ 'Clean Design' }</h4>
        <p>{ 'Your project looks great on any device. Content can be easily read and a user understands freely what you wanted to say him or her.'}</p>
      </Col>
    );
  }
}

export default CustomizeDetails;
