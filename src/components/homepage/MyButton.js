import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
import { Button } from 'reactstrap';
// Style
import { Container, Row, Col } from 'reactstrap';

class MyButton extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      color: this.props.color,
      label: this.props.label,
      link: this.props.link
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

  _clicked(link){
    console.log(`clicked: ${link}`);
  }

  render() {
    const MyStyle = {
      backgroundColor: '#7957B2',
      color: '#fff',
      border: 0,
      fontSize: 12,
      borderRadius: 25,
      paddingRight: 35,
      paddingLeft: 35,
      paddingTop: 10,
      paddingBottom: 10,
    };

    return (
      <div>
        <Button style={ MyStyle } outline onClick={ () => this._clicked(this.state.link) } color={this.state.color} size={'sm'}>{ this.state.label.toUpperCase() }</Button>
      </div>
    );
  }
}

export default MyButton;
