import axios from "axios";
import React, { Component, createContext, useNavigate } from "react";
import App from "../App";
import './login.css';
import Nav from "./navbar.component";
import history from '../history';
import { Navigate } from "react-router";


export default class Login extends Component {


    
    state = "";
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        };
        axios.post('login', data).then(
            res => {
                console.log(res); // prints the user email id
                this.setState({user: res});
                

            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }




    render() {

        if(this.state.user){
            Navigate('/');
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>

                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" required
                                onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" required
                                onChange={e => this.password = e.target.value} />
                        </div>

                        <br />
                        {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                        {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                    </form>
                </div>
            </div>
        );
    }
}