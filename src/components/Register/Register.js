import React, { Component } from 'react';

import '../Register/Register.css';

class Register extends Component{
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',

        }
    }
    render(){
        return(
            <div className="register-form">
                <form className="form-group">
                    <input className="form-control" type="text" placeholder="First Name"/>
                    <input className="form-control" type="text" placeholder="Last Name"/>
                    <input className="form-control" type="email" placeholder="Email address"/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <input className="form-control" type="confirm-password" placeholder="Confirm Password"/>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Register;