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

      <SliderApp />
     <section id="home">
      <Availability />
      </section>
      <section id="about">
      <About></About></section>
      <section id="contact">
      <Contact /></section>
    </>
  );
};
export default home;
