import React from "react";
import Contact from "./pages/contact";
import Home from "./components/home";
import Service from "./pages/service";
import About from "./pages/about";

import { Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
