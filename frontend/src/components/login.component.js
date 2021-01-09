import React, { Component, useState, onClick } from "react";
import {LoginSubmit} from './axios/user'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const typingEmail = (e) => {
        setEmail(e.target.value);
    };

    const typingPassword = (e) => {
        setPassword(e.target.value);
    };

    const clickLogin = async (e) => {
        //TODO
        e.preventDefault()
        console.log('click login')
        const token = await LoginSubmit(email,password)
        console.log(token)
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Sign In</h3>

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

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" 
                                onClick={clickLogin}>
                        Submit
                    </button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
