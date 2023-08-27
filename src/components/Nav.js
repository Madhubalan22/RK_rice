import React from 'react'
import { useRef } from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import "../styles/nav.css";

function Nav() {

    const navRef=useRef();

    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    
    <header>
        <img src="src\images\logomerged.png" />
        <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
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