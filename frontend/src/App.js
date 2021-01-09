//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Switch, Route } from 'react-router-dom'
import './css/animate.min.css';
import './css/bootstrap.min.css';
import './css/jquery.mCustomScrollbar.min.css';
import './css/jquery-ui.css';
import './css/meanmenu.css';
import './css/nice-select.css';
import './css/normalize.css';
import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/slick.css';
import './css/style.css';
import './css/App.css'
import './css/index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Top from './header/Header'
import TopComp from './header/Header_Component'
import MainContent from './main/main'
import Login from './component/Login/Login'

function App() {

  const [login, setLogin] = useState(false)
  
  const startmenu = (login,setLogin) =>{
    return(
    <>
    <Top/>
    <Login login = {login} setLogin = {setLogin} />
    </>
    )
  }

  const ifLogin = (login,setLogin) => {
    if(login)
    {
      return(
      <>
        <div class="header">
          <Top/>
          <TopComp />      
        </div>

        <MainContent />
      </>
      )
    }
    else
    {
      return(
        startmenu(login,setLogin)
      )
    }
  }

  return (
  <>
  {ifLogin(login,setLogin)}
  </>
  )
}


/*
  return (
  <>
    <div class="header">
      <Top/>
      <TopComp attributes = {attributes} />      
    </div>

    <MainContent attributes = {attributes}/>
  </>
  );*/


export default App;
