import React from 'react'; //optional
import imageLogo from './images/petbnb.png';
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav>
    <span className="nav--text">
    <a href="/">
        <img className="imageLogo" src={imageLogo} alt="logologologo"></img>
        </a>
        </span>
    <div className="btn__text" > 
    Login !
     
      </div>
   
    </nav>
  );
}

export default Navigation;