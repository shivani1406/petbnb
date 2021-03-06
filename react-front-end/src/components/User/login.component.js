import axios from "axios";
import React, { useState} from "react";
import { useAlert } from 'react-alert';
import { useNavigate} from "react-router-dom";
import './login.css';



export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const alert = useAlert();
    
    const loginform = (event) => {
        event.preventDefault();
        // const data = {
        //     email: this.email,
        //     password: this.password
        // };
        axios.post('login',  { email, password })
        .then((res) => {
            const user = res.data;
            if (user.id === undefined) {
                alert.show('Username or Password do not match !')
            } else {
                
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
           
         
        }
        ).catch(
            err => {
                alert.show('Username or Password do not match !')
                 console.log(err);
            }
        )
    };

    axios
    .get("/login")
    .then(() => {
      localStorage.clear();
      console.log("session cleared");
    });


    

        // if(this.state.user){
        //     const user = this.state.user;
        //     return navigate('/', {state: {user: user}})
        // }


        // if(this.props.username){
        //     return navigate('/');
        // }

        return (

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form >

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" required
                                value={email}
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                }} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" required
                               value={password}
                               onChange={(event) => {
                                 setPassword(event.target.value);
                               }} />
                        </div>

                        <br />
                        {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                        <button type="submit" 
                        onClick={loginform}
                        className="btn btn-dark btn-lg btn-block">Sign in</button>
                        {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                    </form>
                </div>
            </div>
        );
    
}