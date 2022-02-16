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
class App extends Component {
  

  render() {
    return (
      
      <div className="App">
         <Navigation />
        <Router history={history}>
        <Switch>
           <Route exact path="/" component={HomePage} />
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
