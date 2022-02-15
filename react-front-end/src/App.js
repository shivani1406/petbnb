import React, { Component } from 'react';

import './App.css';
import Navigation from './NavBar/NavBar';
import Profile from './Front_image/Front_image';

class App extends Component {
  

  render() {
    return (
      
      <div className="App">
       <Navigation />
       <Profile />
             
      </div>
    );
  }
}

export default App;
