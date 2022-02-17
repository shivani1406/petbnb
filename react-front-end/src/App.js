import React from 'react';
import { Route, Switch, BrowserRouter} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Navigation from './NavBar/NavBar';
import MainPage from './MainPage/mainpage';
import admin from './Admin/admin';
import createProperty from './create_property';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/navbar.component";
import Login from './components/login.component';
import SignUp from './components/signup.component';
function App (){
  

   
    return (
      
      <div className="App">
        
        
        
        <BrowserRouter>
        <Nav/>
        <Switch>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/login" component={Login} /> 
           <Route exact path="/register" component={SignUp} /> 
           <Route path="/mainpage" component={MainPage} /> 
           <Route path="/admin" component={admin} /> 
           <Route path="/createProperty" component={createProperty} /> 
        </Switch>
        </BrowserRouter>
      
        <Footer />
      </div>
    
    );
  }


export default App;
