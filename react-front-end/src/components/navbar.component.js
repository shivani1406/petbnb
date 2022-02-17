import React, {Component} from "react";
import { Link } from "react-router-dom";
import imageLogo from '../images/petbnb.png';

export default class Nav extends Component {
     render(){
         return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
            <Link to={'/'} className="nav-link"><img className="imageLogo" src={imageLogo} alt="logologologo"></img></Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={'/login'} className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
            </nav>   
         )
     } 
}