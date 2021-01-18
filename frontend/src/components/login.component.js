import React, { Component, useState, onClick } from "react";
import { LoginSubmit } from "./axios/user";

export default function Login({ setName, setToken,setId }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const typingEmail = (e) => {
        setEmail(e.target.value);
    };

    const typingPassword = (e) => {
        setPassword(e.target.value);
    };

    const clickLogin = async (e) => {
        e.preventDefault();
        console.log("click login");
        const back = await LoginSubmit(email, password);
        console.log(back);
        setPassword("");
        setEmail("");
        if (!back.token) {
            alert(back.err);
        } else {
            //TODO Login後要幹嘛
            setName(back.name);
            setToken(back.token);
            setId(back.userId)
        }
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

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={clickLogin}
                    >
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
