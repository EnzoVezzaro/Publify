import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './FooterDashboard.css';
// Components
// Style
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
 } from 'reactstrap';


class FooterDashboard extends Component {

  constructor(props){
    super(props);
    this.state ={
      modal: false
    }
  }

  componentDidMount(){

  }

  toggleModalHelp = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container className={'footerDashboardContainer'} fluid >
        <Col className={'footerDashboardContent'}>
          <a onClick={this.toggleModalHelp} className={'footerDashboardHelp'}>
            <img src={require('../../assets/icons/info.svg')} />
            <p>{'help'}</p>
          </a>
        </Col>
        <Modal isOpen={this.state.modal} toggle={this.toggleModalHelp}>
          <ModalHeader toggle={this.toggleModalHelp}>
            Modal title
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModalHelp}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleModalHelp}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default FooterDashboard;
