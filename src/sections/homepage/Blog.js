import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import { Container, Row, Col, Media } from 'reactstrap';
import Posts from "../../components/homepage/Posts.js";
import './Blog.css';
// Import Labels
import { BLOG } from '../../utils/labels/homepage.js';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: BLOG.title,
      subtitle: BLOG.subtitle,
      posts: BLOG.posts
    }

  }

  componentWillMount(){
    //LABELS.setLanguage('it');
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
      <Container className={'blogContainer'}>
          <Row xs={'12'} >
            <Col xs={'12'} className={'blogPunchline'} >
              <h2>{ this.state.title }</h2>
              <p>{ this.state.subtitle }</p>
            </Col>
          </Row>
          <Row className={'blogPosts'} >
            <Posts posts={ this.state.posts } />
          </Row>
      </Container>
    );
  }
}

export default Blog;
