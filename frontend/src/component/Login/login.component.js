import React, { Component, useState ,onClick } from "react";

export default function Login  ({login,setLogin})  {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const typingEmail = (e)=>{
        setEmail(e.target.value)
    }

    const typingPassword = (e)=>{
        setPassword(e.target.value)
    }

    const clickLogin = (e) => {
        //TODO
    }

    return (
        <form>
            

            <div className="form-group">
                <label>Email address</label>
                <input value = {email} onChange = {typingEmail} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value = {password} onChange = {typingPassword} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" onClick = {clickLogin} className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    );
    
}
