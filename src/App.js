import React from "react";
import Contact from "./pages/contact";
import Home from "./components/home";
import Availability from "./pages/availability";
import About from "./pages/about";

import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
