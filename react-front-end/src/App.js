import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Navigation from './NavBar/NavBar';
import MainPage from './MainPage/mainpage';
import Footer from './Footer';
class App extends Component {
  

  render() {
    return (
      
      <div className="App">
         <Navigation />
        <BrowserRouter>
        <Switch>
           <Route exact path="/" component={HomePage} />
           <Route path="/mainpage" component={MainPage} /> 
        </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
