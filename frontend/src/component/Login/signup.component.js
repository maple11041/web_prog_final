import React, { Component, useState ,onClick } from "react";

export default function SignUp({login,setLogin}){
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')

    const typingEmail = (e)=>{
        setEmail(e.target.value)
    }

    const typingPassword = (e)=>{
        setPassword(e.target.value)
    }

    const typingUsername = (e)=>{
        setUsername(e.target.value)
    }

    const clickSignup = (e) => {
        //TODO
    }

    return (
        <form>
            

            
            <div className="form-group">
                <label>Username</label>
                <input value = {username} onChange = {typingUsername} type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input value = {email} onChange = {typingEmail} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input value = {password} onChange = {typingPassword} type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button onClick = {clickSignup} type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
    );
    
}