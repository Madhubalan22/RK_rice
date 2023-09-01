import React from "react";
import Nav from "./Nav";
import "../styles/home.css";
import SliderApp from "./SliderApp";
import Availability from "../pages/service";
import Contact from "../pages/contact";
const home = () => {
  return (
    <>
      <Nav />
      <div className="banner1">
        <SliderApp />
      </div>

      <Availability />
      <Contact />
    </>
  );
};
export default home;