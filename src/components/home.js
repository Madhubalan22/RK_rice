import React from "react";
import Nav from "./Nav";
import "../styles/home.css";
import About from "../pages/about";
import SliderApp from "./SliderApp";
import Availability from "../pages/service";
import Contact from "../pages/contact";
const home = () => {
  return (
    <>
      <Nav />
      <div style={{marginTop:"55px"}}></div>
      <SliderApp />
      
     <section id="home"></section>
      <Availability />
      
      <section id="about">
      <About></About></section>
      <section id="contact">
      <Contact /></section>
    </>
  );
};
export default home;
