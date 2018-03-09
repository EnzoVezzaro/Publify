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
// Import Labels
import { MENU, BRAND } from '../../utils/labels/homepage.js';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
          <NavbarBrand href="/">{ BRAND.logo }</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navMenu" navbar>
              <NavItem className="navMenuItems">
                <NavLink exact to="/">{ MENU.links.home.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/authentication">{ MENU.links.feature.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/about">{ MENU.links.about.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/pricing">{ MENU.links.pricing.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/blog">{ MENU.links.blog.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems">
                <NavLink exact to="/login">{ MENU.links.login.toUpperCase() }</NavLink>
              </NavItem>
              <NavItem className="navMenuItems TryNow">
                <NavLink exact to="/signup">{ MENU.links.tryNow.toUpperCase() }</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
