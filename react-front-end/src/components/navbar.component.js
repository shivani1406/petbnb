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

      buttons = (<ul >
        <li >
          <Link to={'/'} >Home</Link>
        </li>
              
               <li >
               <button
                  onClick={(e) => logOut(e)} >Logout</button>
              </li>
              <li >
               <a href="/">Welcome {userName} !</a> 
               {/* <Link to={'/login'} className="nav-link">Logout</Link> */}
               </li>
            </ul>)

    } else {

      buttons = (<ul >
        <li >
          <Link to={'/'} >Home</Link>
        </li>
        <li >
          <Link to={'/login'} >Login</Link>
        </li>
        <li >
          <Link to={"/register"} >Sign up</Link>
        </li>
      </ul>)
    }

    return (

      <nav>
        
        <div >
        <input type="checkbox" id="check"/>
        <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
</label>
          <Link to={'/'} ><img className="imageLogo" src={imageLogo} alt="logologologo"></img></Link>
          <div >
            {buttons}
          </div>
        </div>
      </nav>
    )
  
}