import React, { Component} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import MainPage from './MainPage/mainpage';
import PropertyDetails from './components/property/property_details';
import MyBookings from './components/User/my_bookings.js';
import Admin from './components/Admin/admin';
import CreateProperty from './components/property/create_property';
import Footer from './Footer';
import history from './history';
import Messages from './components/Chats/messages';

import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from "./components/navbar.component";
import Login from './components/User/login.component';
import SignUp from './components/User/signup.component';
import PropertyPage from './components/property/propertyPage';
import AdminBookings from './components/Admin/adminBookings';
import UserProfile from './components/User/userProfile';
class App extends Component {

  render() {
    return (
      <div className="App">

        <BrowserRouter history={history}>
          <Nav />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/createProperty" element={<CreateProperty />} />
            <Route path="/propertyPage/:id" element={<PropertyPage />} />
            <Route path="/adminBookings/*" element={<AdminBookings />} />
            <Route path="/propertyDetails/:id" element={<PropertyDetails />} />
            <Route path="/myBookings/" element={<MyBookings />} />
            <Route path="/userProfile/:id" element={<UserProfile/>} />
            <Route path="/Messages/:id" element={<Messages/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
