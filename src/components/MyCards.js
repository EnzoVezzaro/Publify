import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './MyCards.css';

class MyCards extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      image: this.props.image,
      title: this.props.title,
      subtitle: this.props.subtitle,
      id: this.props.id
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
      <div className={'featuresCardsContainer'} id={ this.state.id }>
        <Card className={'featuresCards'}>
          <CardImg top width="60%" src={ this.state.image } alt={ this.state.title } className={'featuresCardImage'} />
          <CardBody className={'featuresCardBody'}>
            <div className={'featuresContent'}>
              <CardTitle className={'featuresCardTitle'}>{ this.state.title }</CardTitle>
              <CardSubtitle className={'featuresCardSubtitle'} ><p>{ this.state.subtitle }</p></CardSubtitle>
            </div>
            <div className={'featuresButton'}>
              <img className={'featuresCardBodyImage'} src={require('../assets/icons/features_button.svg')} />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyCards;
