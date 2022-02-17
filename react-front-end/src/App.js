import React, { Component } from 'react';
import { Router, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Navigation from './NavBar/NavBar';
import MainPage from './MainPage/mainpage';
import admin from './Admin/admin';
import createProperty from './create_property';
import Footer from './Footer';
import history from './history';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navbar.component";
import Login from './components/login.component';
import SignUp from './components/signup.component';
class App extends Component {
  

  render() {
    return (
      
      <div className="App">
        
        <Router history={history}>
        <Nav/>

        <Switch>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/login" component={Login} /> 
           <Route exact path="/register" component={SignUp} /> 
           <Route path="/mainpage" component={MainPage} /> 
           <Route path="/admin" component={admin} /> 
           <Route path="/createProperty" component={createProperty} /> 
        </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
