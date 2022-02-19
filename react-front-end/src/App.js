import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import MainPage from './MainPage/mainpage';
import Admin from './Admin/admin';
import CreateProperty from './create_property';
import Footer from './Footer';
import history from './history';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/navbar.component";
import Login from './components/login.component';
import SignUp from './components/signup.component';
import PropertyPage from './components/propertyPage';
import axios from 'axios';
class App extends Component {

  render() {
    return (

      <div className="App">

        <BrowserRouter history={history}>
          <Nav/>

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<SignUp />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/createProperty" element={<CreateProperty />} />
            <Route path="/propertyPage/:id" element={<PropertyPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
