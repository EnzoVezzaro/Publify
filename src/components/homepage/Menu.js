import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  buttom
} from 'react-router-dom';
// Style
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';
import './Menu.css';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
import * as firebaseui from 'firebaseui';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className={"menuContainer"}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">MoviApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navMenu" navbar>
              <NavItem className="navMenuItems">
                <NavLink exact to="/">{'Home'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/authentication">{'Features'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/about">{'About'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/pricing">{'Pricing'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/blog">{'Blog'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/login">{'Login'.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems TryNow">
                <NavLink exact to="/signup">{ "Try Now".toUpperCase() }</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
