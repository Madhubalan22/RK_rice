import React from "react";
import Nav from "./Nav";

import SliderApp from "./SliderApp";
import Availability from "../pages/availability";
import Contact from "../pages/contact";
const home = () => {
  return (
    <div>
          <Nav/>
          <SliderApp/>
          <Availability/>
          <Contact/>
    </div>
    
  )
}

export default home