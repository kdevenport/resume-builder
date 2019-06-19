import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../Login/Login.css';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            emailAddress: '',
            password: ''
        }
    }
    render(){
        return(
            <div className="login-form">
                <form className="form-group">
                    <input className="form-control" type="email" placeholder="Email address"/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <button className="button" type="submit">Login</button>
                    <button className="button" type="button">
                        <Link to="/register">Register</Link>
                    </button>
                </form>
            </div>
        )
    }
}
export default Login;