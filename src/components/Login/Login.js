import React, { Component } from 'react';

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
            <div>
                <form className="form-group">
                    <input className="form-control" type="email" placeholder="Email address"/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <button className="btn btn-primary btn-block" type="submit">Submit</button>
                    <button className="btn btn-primary btn-block" type="button">Register</button>
                </form>
            </div>
        )
    }
}
export default Login;