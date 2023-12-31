import React from 'react'
import { useRef } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import "../styles/nav.css";
import logo from "../images/logomerged copy.png"


function Nav() {

    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    
    <header>
        <img className='logo' src={logo} style={{width:"320px",height:"178px"}} />
        <nav ref={navRef}>
            <a href="/">Home</a>
            <a href="#home">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button  className="nav-btn nav-close-btn" onClick={showNavbar}>  
               <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
              <FaBars/>
        </button>
    </header>
  )
}

export default Nav