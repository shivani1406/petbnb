import axios from "axios";
import React, { Component } from "react";

export default class SignUp extends Component {

     handleSubmit = e => {
         e.preventDefault();
         const data = {
             email: this.email,
             password: this.password
         };
         
         axios.post('http://localhost:8080/register', data).then(
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
                <h3>Register</h3>

                {/* <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div> */}

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                        onChange={e => this.email = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                        onChange={e => this.password = e.target.value}/>
                </div>
                <br/>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                
            </form>
            </div>
            </div>
        );
    }
}