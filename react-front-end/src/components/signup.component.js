import axios from "axios";
import React, { useState} from "react";
import { useNavigate} from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    let owner = false;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registerform = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/register', {name, email, password, owner})
        .then((res) => {
            const user = res.data;
            localStorage.setItem('user_id',user.id);
            localStorage.setItem('user_name',user.name);
            localStorage.setItem('user_role',user.role);
            console.log(user);
            if (localStorage.getItem('user_role') === "guest") {
                navigate(`/mainpage`);
            } else {
                navigate(`/admin`);

            }
         
        }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    
    const selectShortlistedApplicant = (e) => {
        const checked = e.target.checked;
        if (checked) {
         console.log("Owner");
         owner = true;
        } else {
         console.log("Guest");
         owner = false;
        }
      };
    
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form >
                        <h3>Register</h3>

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
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                 value={password}
                                 onChange={(event) => {
                                   setPassword(event.target.value);
                                 }} />
                        </div>

                        <div className="form-group">
                        <fieldset>
                    
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
                       onClick={(e) => {
                        selectShortlistedApplicant(e);
                    }}
                      />
                      <label class="form-check-label" for="flexSwitchCheckDefault">Owner</label>
                    </div>
                   
                  </fieldset>
                            </div>
                        <br />

                        <button type="submit" className="btn btn-dark btn-lg btn-block"  onClick={registerform}>Register</button>

                    </form>
                </div>
            </div>
        );
    }
