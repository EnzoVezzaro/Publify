import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Components
import DetailList from "../../components/homepage/DetailList.js";
import MyCards from "../../components/homepage/MyCards.js";
// Style
import { Container, Row, Col } from 'reactstrap';
import './VideoHero.css';
// Import Labels
import { VIDEO } from '../../utils/labels/homepage.js';

class VideoHero extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      punchline: VIDEO.punchline,
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
      <Container className={'videoContainer'} fluid={true} >
        <Row xs={'12'} className={'videoContent'}>
          <Col sm={{ size: 6 }} className={'videoPlay'} >
            <img src={require('../../assets/icons/videoPlay.svg')} className={'videoPlayImg'} />
          </Col>
          <Col sm={{ size: 6 }} className={'videoPunchline'} >
            <h3>{ this.state.punchline }</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VideoHero;
