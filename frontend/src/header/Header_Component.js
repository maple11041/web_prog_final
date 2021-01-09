import React, { useState ,onClick} from 'react'
import logo from '../images/9.jpg'
//<!-- header inner -->
function Header_inner({attributes})
{
	//const logo = require('../images/9.jpg')

    //const [signup,setSignup] = useState(false)

    const wrapper ={
        justifyContent: 'center',
        minHeight: '80px',
        //maxHeight: '80px',
        alignItems: 'center'
    }

    const clickLogin = (e) =>{
        e.preventDefault()
        attributes.setLogin(true)
        //setSignup(!signup)
        console.log('Clicked')
        //console.log(signup)
    }

    return(      
    <div class="container">
        <div class="row" style = {wrapper}>
        {/*
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                    <div class="center-desk">
                        <div class="logo"> <a href="index.html"><img src={logo} alt="logo"/></a> </div>
                    </div>
                </div>
            </div>
            */}
            
                <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                    <div class="menu-area">
                        <div class="limit-box">
                            <nav class="main-menu">
                                <ul class="menu-area-main">
                                    <li> <a href="">Home</a> </li>
                                    <li> <a href="">Create</a> </li>
                                    <li> <a href="">Find</a> </li>
                                    <li> <a href="">Profile</a> </li>
                                    <li> <a href="#contact">Login/signup</a> </li>   
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            
                
            
        </div>
    </div>
 	);
}

export default Header_inner;