import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  buttom
} from 'react-router-dom';
import './FormAuth.css';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// firebase Auth UI
//import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth.js';
// Style
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
} from 'reactstrap';
import classnames from 'classnames';
// Import Labels
import { AUTH } from '../../utils/labels/authentication.js';
import { FormErrors } from './FormErrors';
import './Form.css';

class FormAuth extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      activeTab: '1',
      signIn: AUTH.signIn.label,
      signUp: AUTH.signUp.label,
      emailSignIn: '',
      passwordSignIn: '',
      formErrorsSignIn: {
        email: '',
        password: ''
      },
      emailValidSignIn: false,
      passwordValidSignIn: false,
      formValidSignIn: false,
      emailSignUp: '',
      passwordSignUp: '',
      formErrorsSignUp: {
        email: '',
        password: ''
      },
      emailValidSignUp: false,
      passwordValidSignUp: false,
      formValidSignUp: false,
      isRemembered: true
    }
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '/'
    ,
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => true
    }
  };

  componentWillReceiveProps(newProps) {
    // receive props from parent
    /*
    this.setState({
      rootDB: newProps.rootDB
    });
    */

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleUserInputSignIn = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateSignIn(name, value) });
  }

  handleUserInputSignUp = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateSignUp(name, value) });
  }

  validateSignIn(fieldName, value) {
    let fieldValidationErrors = this.state.formErrorsSignIn;
    let emailValidSignIn = this.state.emailValidSignIn;
    let passwordValidSignIn = this.state.passwordValidSignIn;

    switch(fieldName) {
      case 'emailSignIn':
        emailValidSignIn = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValidSignIn ? '' : ' is invalid';
        break;
      case 'passwordSignIn':
        passwordValidSignIn = value.length >= 6;
        fieldValidationErrors.password = passwordValidSignIn ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValidSignIn: emailValidSignIn,
                    passwordValidSignIn: passwordValidSignIn
                  }, this.validateFormSignIn);
  }

  validateSignUp(fieldName, value) {
    let fieldValidationErrors = this.state.formErrorsSignUp;
    let emailValidSignUp = this.state.emailValidSignUp;
    let passwordValidSignUp = this.state.passwordValidSignUp;

    switch(fieldName) {
      case 'emailSignUp':
        emailValidSignUp = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValidSignUp ? '' : ' is invalid';
        break;
      case 'passwordSignUp':
        passwordValidSignUp = value.length >= 6;
        fieldValidationErrors.password = passwordValidSignUp ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValidSignUp: emailValidSignUp,
                    passwordValidSignUp: passwordValidSignUp
                  }, this.validateFormSignUp);
  }

  validateFormSignIn() {
    this.setState({formValidSignIn: this.state.emailValidSignIn && this.state.passwordValidSignIn});
  }

  validateFormSignUp() {
    this.setState({formValidSignUp: this.state.emailValidSignUp && this.state.passwordValidSignUp});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  toggleSwitcher = () => {
    this.setState({ isRemembered: !this.state.isRemembered })
  }

  render() {
    const classNameSwitcher = `toggle-component ${ this.state.isRemembered ? ' active' : ''}`
    return (
      <Container className={'formAuthContainer'} >
        <Col sm="6">
          <div className={'formAuthContent'} >
            <div className={'formAuthTabs'}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    { this.state.signIn }
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    { this.state.signUp }
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className={'formAuthContentTabs'}>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col>
                      <form className="formAuth">
                        <div className="panel panel-default">
                          <FormErrors formErrors={this.state.formErrorsSignIn} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrorsSignIn.email)}`}>
                          <label htmlFor="emailSignIn">{ AUTH.signIn.fields.email }</label>
                          <input type="email" required className="form-control" name="emailSignIn"
                            placeholder={ AUTH.placeholders.email }
                            value={this.state.emailSignIn}
                            onChange={this.handleUserInputSignIn}  />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrorsSignIn.password)}`}>
                          <label htmlFor="passwordSignIn">{ AUTH.signIn.fields.password }</label>
                          <input type="password" className="form-control" name="passwordSignIn"
                            placeholder={ AUTH.placeholders.password }
                            value={this.state.passwordSignIn}
                            onChange={this.handleUserInputSignIn}  />
                        </div>
                        <div className={'formFooter'}>
                          <div>
                            <div className={'formSwitcher'}>
                              <div
                                className={classNameSwitcher}
                                onClick={() => this.toggleSwitcher()}>
                                <div className='toggle-button' />
                              </div>
                              <p>{ AUTH.remember }</p>
                            </div>
                          </div>
                          <div>
                            <div className={'formForgot'}>
                              <p>{ AUTH.help }</p>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="formBtn btn btn-primary" disabled={!this.state.formValidSignIn}>{ AUTH.signIn.cta }</button>
                      </form>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col>
                      <form className="formAuth">
                        <div className="panel panel-default">
                          <FormErrors formErrors={this.state.formErrorsSignUp} />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrorsSignUp.email)}`}>
                          <label htmlFor="emailSignUp">{ AUTH.signUp.fields.email }</label>
                          <input type="email" required className="form-control" name="emailSignUp"
                            placeholder={ AUTH.placeholders.email }
                            value={this.state.emailSignUp}
                            onChange={this.handleUserInputSignUp}  />
                        </div>
                        <div className={`form-group ${this.errorClass(this.state.formErrorsSignUp.password)}`}>
                          <label htmlFor="passwordSignUp">{ AUTH.signUp.fields.password }</label>
                          <input type="password" className="form-control" name="passwordSignUp"
                            placeholder={ AUTH.placeholders.password }
                            value={this.state.passwordSignUp}
                            onChange={this.handleUserInputSignUp}  />
                        </div>
                        <div className={'formFooter'}>
                          <div>
                            <div className={'formSwitcher'}>
                              <div
                                className={classNameSwitcher}
                                onClick={() => this.toggleSwitcher()}>
                                <div className='toggle-button' />
                              </div>
                              <p>{ AUTH.remember }</p>
                            </div>
                          </div>
                          <div>
                            <div className={'formForgot'}>
                              <p>{ AUTH.help }</p>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="formBtn btn btn-primary" disabled={!this.state.formValidSignUp}>{ AUTH.signUp.cta }</button>
                      </form>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
            <div className={'formAuthDivider'}>
              <p>{ AUTH.divider }</p>
            </div>
            <div className={'formAuthFBAuth'}>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
            <div className={'formAuthFooterLinks'}>
              <p>{ this.state.activeTab == 1 ? AUTH.signIn.hasAccount : AUTH.signUp.hasAccount }</p>
              <a onClick={() => {
                if (this.state.activeTab == 1){
                  this.toggle('2');
                } else {
                  this.toggle('1');
                }
              }}>
                { this.state.activeTab == 1 ? AUTH.signIn.createAccount : AUTH.signUp.login }
              </a>
            </div>
          </div>
        </Col>
        <Col sm="6">
        </Col >
      </Container>
    );
  }
}

export default FormAuth;
