import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import imageLogo from '../images/petbnb.png';
import { useNavigate } from "react-router-dom";
import './Nav.css';
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
      if(localStorage.getItem('user_role') === "owner") {
        buttons = ( <ul >
        <li >
          <Link to={'/'} >Home</Link>
        </li>
        <li >
          <Link to={'/admin'} >Admin</Link>
        </li>
        <li >
          <Link to={`/adminBookings/${localStorage.getItem('user_id')}`} >Booked Properties</Link>
        </li>
               <li >
               <button
                  onClick={(e) => logOut(e)} >Logout</button>
              </li>
              <li >
               <Link to={`/userProfile/${localStorage.getItem('user_id')}`}>Welcome {userName} !
               </Link> 
               {/* <Link to={'/login'} className="nav-link">Logout</Link> */}
               </li>
            </ul>
            )    
      }
      else {
        buttons = (
        
          <ul >
            <li >
              <Link to={'/'} >Home</Link>
            </li>
            <li >
              <Link to={'/mainpage'} >Properties</Link>
            </li>
            <li >
              <Link to={'/myBookings'} >My Bookings</Link>
            </li>
                  
                   <li >
                   <button
                      onClick={(e) => logOut(e)} >Logout</button>
                  </li>
                  <li >
                  <Link to={`/userProfile/${localStorage.getItem('user_id')}`}>Welcome {userName} !
               </Link> 
                   {/* <Link to={'/login'} className="nav-link">Logout</Link> */}
                   </li>
                </ul>
                )    
      }
     
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