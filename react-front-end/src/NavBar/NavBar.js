import React from 'react'; //optional
import imageLogo from './images/petbnb.png';
function Navigation() {
  return (
    <nav>
    <span className="nav--text">
        <img className="imageLogo" src={imageLogo} alt="logologologo"></img>
        </span>
    <div className="btn__text" > 
    Login !
     
      </div>
   
    </nav>
  );
}

export default Navigation;