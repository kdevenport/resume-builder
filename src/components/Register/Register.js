import React, { Component } from 'react';

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
            <div>
                <form className="form-group">
                    <input className="form-control" type="text" placeholder="First Name"/>
                    <input className="form-control" type="text" placeholder="Last Name"/>
                    <input className="form-control" type="email" placeholder="Email address"/>
                    <input className="form-control" type="password" placeholder="Password"/>
                    <input className="form-control" type="confirm-password" placeholder="Confirm Password"/>
                    <button className="btn btn-primary btn-block" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default Register;