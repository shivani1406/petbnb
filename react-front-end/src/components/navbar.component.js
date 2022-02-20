import axios from "axios";
import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import imageLogo from '../images/petbnb.png';
import { useNavigate } from "react-router-dom";
export default function Nav () {

  
    let buttons;
    const navigate = useNavigate();
    const logOut = function (event) {
      event.preventDefault();
      axios.get("/logout").then(() => {
        localStorage.clear();
        navigate("/login");
      });
    };
    let userName =localStorage.getItem('user_name');
    if(localStorage.getItem('user_name') !== null){

      buttons = (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <h4>{userName}</h4> 
               {/* <Link to={'/login'} className="nav-link">Logout</Link> */}
               <button
                  onClick={(e) => logOut(e)}>Logout</button>
              </li>
            </ul>)

    } else {

      buttons = (<ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={'/login'} className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to={"/register"} className="nav-link">Sign up</Link>
        </li>
      </ul>)
    }

    return (

      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <Link to={'/'} className="nav-link"><img className="imageLogo" src={imageLogo} alt="logologologo"></img></Link>
          <div className="collapse navbar-collapse">
            {buttons}
          </div>
        </div>
      </nav>
    )
  
}