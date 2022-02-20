import axios from "axios";
import React, { Component,useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { navigate } from "@reach/router";

export default function SignUp() {
    const navigate = useNavigate();
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: ""
    //     };
    // }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registerform = (event) => {
        event.preventDefault();
        // const data = {
        //     name: this.name,
        //     email: this.email,
        //     password: this.password

        // };

        axios.post('http://localhost:8080/register', {name, email, password})
        // .then(
        //     res => {
        //         this.setState({ username: res.data });
        //         this.props.onUsernameChange(this.state.username);
        //     }
        .then((res) => {
            const user = res.data;
            localStorage.setItem('user_id',user.id);
            localStorage.setItem('user_name',user.name);
            localStorage.setItem('user_role',user.role);
            console.log(user);
            if (localStorage.getItem('user_role') == "guest") {
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

    
        // if (this.state.username) {
        //     return <Navigate to={'/'} />
        // }
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
                        <br />

                        <button type="submit" className="btn btn-dark btn-lg btn-block"  onClick={registerform}>Register</button>

                    </form>
                </div>
            </div>
        );
    }
