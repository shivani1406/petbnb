import axios from "axios";
import React, { Component } from "react";
import './login.css';

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        };
        
        axios.post('http://localhost:8080/login', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }


    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required
                        onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required
                        onChange={e => this.password = e.target.value} />
                </div>

                <br/>
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