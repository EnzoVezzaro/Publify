import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  buttom
} from 'react-router-dom';
import logo from './../logo.svg';
import './../App.css';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      rootDB: this.props.rootDB
    }
  }

  componentDidMount(){
    //console.log(this.props.rootDB);
  }

  componentWillReceiveProps(newProps) {
    // receive props from parent
    this.setState({
      rootDB: newProps.rootDB
    });

  }


  render() {
    return (
      <div>
        <h2>{ this.state.rootDB }</h2>
        <h1>{ this.state.rootDB }</h1>
      </div>
    );
  }
}

export default HomePage;
