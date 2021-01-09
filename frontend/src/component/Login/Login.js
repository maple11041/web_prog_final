import React, { useEffect, useRef, useState, onClick } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";

function Header_inner({login,setLogin})
{
	const [pick,setPick] = useState(true)

    const logForm = (e) =>{
        if(e)
        {
            return(<Login/>)
        }
        else
        {
            return(<SignUp/>)
        }
    }

    const show = (e) =>{
        if(e)
        {
            console.log('login')
            return(
                <ul className="  mlb-box">
              <li className="mlb-box-list selected-mlb-box-list" >
                <div className="mlb-box-text "   onClick = {clickLogin}>Login</div>
              </li>
              <li className="mlb-box-list" >
                <div className="mlb-box-text"  onClick = {clickSignup} >Sign up</div>
              </li>
            </ul>
                )
        }
        else
        {
            return(
            <ul className="  mlb-box">
              <li className="mlb-box-list" >
                <div className="mlb-box-text "   onClick = {clickLogin}>Login</div>
              </li>
              <li className="mlb-box-list selected-mlb-box-list"  >
                <div className="mlb-box-text"  onClick = {clickSignup} >Sign up</div>
              </li>
            </ul>
            )
        }
    }    

    const clickLogin = (e) =>{
        e.preventDefault()
        setPick(true)
        console.log(pick)
    }

    const clickSignup = (e) =>{
        e.preventDefault()
        setPick(false)
        console.log(pick)
    }

    return (<Router>
    <div className="App2">
     <div class="product-bg">
        <div class="product-bg-white">
            <div class="container"> 

      <div className="auth-wrapper">
                
              
        <div className="auth-inner">


       <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {show(pick)}
          </div>
        </div>
      </nav>


        {logForm(pick)}

        </div>
      </div>

      </div></div></div>

    </div></Router>
  );
    /*
    return(      
    <div class="product-bg">
        <div class="product-bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="product-box">
                            <h3>Norton Internet Security</h3>
                            <span>$25.00</span>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="product-box">
                            <h3>Norton Internet Security</h3>
                            <span>$25.00</span>
                        </div>
                    </div>
                    you can insert more blocks here at main.js
                </div>
            </div>
        </div>
    </div>
 	);
    */
}

export default Header_inner;