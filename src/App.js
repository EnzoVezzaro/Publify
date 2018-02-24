
// Main Component
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
// DB
import firebase from 'firebase';
import auth from "firebase/auth";
import database from "firebase/database";
import firestore from "firebase/firestore";
// Routing
import HomePage from './routes/HomePage.js';
import Dashboard from './routes/Dashboard.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      database: '',
      firestore: '',
      first: '',
      rootDB: '',
    }

    var config = {
      apiKey: "AIzaSyALUqJAFbeKcqluUkyg7wwYGzHHWf3pw0w",
      authDomain: "moviapp-7943b.firebaseapp.com",
      databaseURL: "https://moviapp-7943b.firebaseio.com",
      projectId: "moviapp-7943b",
      storageBucket: "",
      messagingSenderId: "902800466121"
    };

    // Initialize Firebase
    firebase.initializeApp(config);
    // Take db to state
    this.state.firestore = firebase.firestore();
    this.state.database = firebase.database();

  }

  componentWillMount(){

    let users = firebase.database().ref().child('users/1/')

    let self = this;

    users.on('value', function(snapshot) {
      // TODO: Ringrazia dado per il self pattern
      self.setState({
        first: snapshot.val().first,
        last: snapshot.val().last,
      });

    });

  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">{this.state.first}</Link></li>
            <li><Link to="/login">About</Link></li>
            <li><Link to="/signup">{this.state.last}</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" render={() => <HomePage rootDB={this.state.first} />}/>
          <Route path="/login" component={Dashboard}/>
          <Route path="/signup" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
