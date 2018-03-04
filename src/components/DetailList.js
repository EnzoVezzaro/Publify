import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import './DetailList.css';

class DetailList extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      image: this.props.image,
      title: this.props.title,
      subtitle: this.props.subtitle
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
      <Media className={'detailListContainer'}>
        <Media left href="#" className={'detailListImage'} >
          <img src={this.state.image} />
        </Media>
        <Media body className={'detailListBody'}>
          <Media heading className={'detailListTitle'}>
            { this.state.title }
          </Media>
          <p>
          { this.state.subtitle }
          </p>
        </Media>
      </Media>
    );
  }
}

export default DetailList;
