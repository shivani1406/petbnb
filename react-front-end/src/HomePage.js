import React, { Component } from 'react';

import './App.css';
import Nav from './components/navbar.component';
import Profile from './Front_image/Front_image';

class HomePage extends Component {

 
  render() {
    return (

      <div className="App">

        <Profile />

      </div>
    );
  }
}

export default HomePage;