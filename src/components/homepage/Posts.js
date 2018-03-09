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
import './Posts.css';

class Posts extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      posts: this.props.posts
    }

    console.log(this.state.posts);

  }

  componentDidMount(){
  }

  render() {

    const Posts = this.state.posts.map((post, i) =>
      <div className={'postsContent'} key={`post_${i}`} >
        <div className={'postsImage'} style={{ backgroundImage: `url(${post.image})` }}>

        </div>
        <div className={'postsHead'}>
          <h3>{ post.title }</h3>
          <h5>{ post.posted }</h5>
        </div>
        <div className={'postsBody'}>
          <p>{ post.body }</p>
        </div>
        <div className={'postsCTA'}>
          <MyButton label={ post.cta} color={'primary'} link={ post.link} ></MyButton>
        </div>
      </div>
    );

    return (
      <Col className={'postsContainer'}>
        { Posts }
      </Col>
    );
}
}

export default Posts;
