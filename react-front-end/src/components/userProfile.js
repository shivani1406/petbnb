import axios from "axios";
import React, { useState} from "react";
import { useNavigate} from "react-router-dom";

export default function userProfile() {
  const navigate = useNavigate();
  let owner = false;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  return(

 
  <div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-bs-toggle="tab" href="#home">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="tab" href="#profile">Change Password</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#"></a>
  </li>
  {/* <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li> */}
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active show" id="home">
    <p>  <form >
      <img src={avatar} className="propertyTile__img" alt=""/>
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
                            <input type="email" className="form-control" placeholder="Enter email"
                                 value={email}
                                 onChange={(event) => {
                                   setEmail(event.target.value);
                                 }}/>
                        </div>

                        <div className="form-group">
                            <label>Add Avatar</label>
                            <input type="text" className="form-control" placeholder="Enter url"
                                 value={avatar}
                                 onChange={(event) => {
                                   setAvatar(event.target.value);
                                 }} />
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block"  onClick={registerform}>Update</button>

</form>
                        </p>
  </div>
  <div class="tab-pane fade" id="profile">
    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
  </div>
  <div class="tab-pane fade" id="dropdown1">
    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
  </div>
  <div class="tab-pane fade" id="dropdown2">
    <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
  </div>
</div>
  </div>
   )
}