import React, { Component, useState, onClick } from "react";
import {SignUpSubmit} from './axios/user'
import { useHistory } from "react-router-dom";

export default function SignUp({ setName,setToken,setId }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    let history = useHistory();
    //const alert = useAlert()

    const typingEmail = (e) => {
        setEmail(e.target.value);
    };

    const typingPassword = (e) => {
        setPassword(e.target.value);
    };

    const typingUsername = (e) => {
        setUsername(e.target.value);
    };

    const clickSignup = async (e) => {
        e.preventDefault()
        console.log('click signup')
        const back = await SignUpSubmit(username,password,email)
        console.log(back)
        setUsername('')
        setPassword('')
        setEmail('')
        if(!back.token)
        {
            alert(back.err)
        }
        else
        {
            //TODO signup後要幹嘛
            setName(back.name);
            setToken(back.token);
            setId(back.userId);            
            history.push("/shop");
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input
                            value={username}
                            onChange={typingUsername}
                            type="text"
                            className="form-control"
                            placeholder="Username"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            value={email}
                            onChange={typingEmail}
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={typingPassword}
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        onClick={clickSignup}
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Sign Up
                    </button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
