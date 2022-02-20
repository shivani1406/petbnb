import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router";
import { Redirect } from "react-router-dom";
import { navigate } from "@reach/router";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password

        };

        axios.post('http://localhost:8080/register', data).then(
            res => {
                this.setState({ username: res.data });
                this.props.onUsernameChange(this.state.username);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        if (this.state.username) {
            return <Navigate to={'/'} />
        }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name"
                                onChange={e => this.name = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                onChange={e => this.password = e.target.value} />
                        </div>
                        <br />

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>

                    </form>
                </div>
            </div>
        );
    }
}