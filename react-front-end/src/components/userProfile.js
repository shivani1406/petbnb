import axios from "axios";
import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import Captcha from "./captcha";

export default function userProfile() {
  const navigate = useNavigate();
  let owner = false;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const baseUrl = 'http://localhost:8080';
  let {id} = useParams();
  useEffect(() => {
    getDetails();
  }, [])
  const getDetails = () => {
    fetch(`${baseUrl}/api/profile/${id}`).then((result) => {
      result.json().then((resp) => {
        // setProperties(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setAvatar(resp[0].avatar_url)
      })
    })
  }
  function myFunction() {
    var x = document.getElementById("home");
    var y = document.getElementById("profile");
    if (x.style.display === "none" && y.style.display === "block") {
      x.style.display = "block";
      y.style.display = "none" ;
    } 
    else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }
  return(

 
  <div className="_profile">
<div id="myTabContent" className="tab-content">
<button type="button" className="btn btn-outline-secondary" onClick={myFunction}>Profile</button>
<button type="button" className="btn btn-outline-secondary" onClick={myFunction}>Credentials</button>
<div className="auth-wrapper">
                <div className="auth-inner">
  <div id="home">
     <form >
     <fieldset>
       
      <img src={avatar} className="profile__img" alt=""/>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name"
                                 value={name}
                                 onChange={(event) => {
                                   setName(event.target.value);
                                 }} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" aria-describedby="emailHelp"
                                 value={email}
                                 onChange={(event) => {
                                   setEmail(event.target.value);
                                 }}/>
                                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label>Add Avatar</label>
                            <input type="text" className="form-control" placeholder="Enter url"
                                 value={avatar}
                                 onChange={(event) => {
                                   setAvatar(event.target.value);
                                 }} />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block"  >Update</button>
                       
</fieldset>
</form>


       </div>
       <div id="profile">
                        <fieldset>
  <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                 value={password}
                                 onChange={(event) => {
                                   setPassword(event.target.value);
                                 }} />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                 value={password}
                                 onChange={(event) => {
                                   setPassword(event.target.value);
                                 }} />
                        </div>
                        <Captcha />
                        <button type="submit" className="btn btn-dark btn-lg btn-block"  >Update</button>
                        </fieldset>
                        </div>
       </div>   
                     
  </div>
  {/* <div className="auth-wrapper">
                <div className="auth-inner"> */}
  
  
                
  {/* </div></div> */}
  {/* <div class="tab-pane fade" id="dropdown1">
    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
  </div> */}
  {/* <div class="tab-pane fade" id="dropdown2">
    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
  </div> */}
</div>
  </div>
   )
}