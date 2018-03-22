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
  ButtonDropdown,
  Container } from 'reactstrap';
import './Menu.css';
// Import Labels
import { BRAND } from '../../utils/labels/homepage.js';
import { MENU } from '../../utils/labels/commons.js';
// Firebase
// DB
import firebase from 'firebase';
import auth from "firebase/auth";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      alarmOpen: false,
      userOpen: false,
      signedIn: false // Local signed-in state.
    };
  }

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => this.setState({signedIn: !!user})
    );
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleAlarm = () => {
    this.setState({
      alarmOpen: !this.state.alarmOpen
    });
  }
  toggleUser = () => {
    this.setState({
      userOpen: !this.state.userOpen
    });
  }
  render() {
    if (!this.state.signedIn) {
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
                  <NavLink exact to="/authentication">{ MENU.links.login.toUpperCase() }</NavLink>
                </NavItem>
                <NavItem className="navMenuItems TryNow">
                  <NavLink exact to="/authentication">{ MENU.links.tryNow.toUpperCase() }</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div className={"menuContainer"}>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">{ BRAND.logo }</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto navMenuLoged" navbar>
                <NavItem className="navMenuItemsLoged">
                  <ButtonDropdown isOpen={this.state.alarmOpen} toggle={this.toggleAlarm} className={'navMenuAlarm'} >
                    <DropdownToggle className={'navMenuAlarmIcon'} >
                      <img src={require('../../assets/icons/alarm.svg')} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Another Action</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </NavItem>
                <NavItem className="navMenuDividerContainer">
                  <div className={'navMenuDivider'} >
                  </div>
                </NavItem>
                <NavItem className="navMenuItemsLoged">
                  <ButtonDropdown isOpen={this.state.userOpen} toggle={this.toggleUser} className={'navMenuUser'} >
                    <DropdownToggle caret className={'navMenuUserIcon'}>
                      <img src={require('../../assets/icons/user.svg')} />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink exact to="/dashboard">{ MENU.user.dashboard }</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink exact to="/">{ MENU.user.plan }</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink exact to="/">{ MENU.user.settings }</NavLink>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={ () => firebase.auth().signOut() }>
                        { MENU.user.logout }
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}
