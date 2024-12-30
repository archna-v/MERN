import React from "react";
import Navbar from "./Components/FunctionalComponents/Navbar";  // Path to Navbar
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";  // Path to ClassCompEg
import Home from "./Components/FunctionalComponents/Home";  // Path to Home
import About from "./Components/FunctionalComponents/About";  // Path to About
import Contact from "./Components/FunctionalComponents/Contact";  // Path to Contact
import Gallery from "./Components/FunctionalComponents/Gallery";  // Path to Gallery
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About college="koNGU ENGINEERING COLLEGE" />} />
          <Route path="/Gallery" element={<Gallery />} />



        </Routes>
      </BrowserRouter>
      <Navbar />
      
      <Gallery />
      <Contact />
      <ClassCompEg />
      <Home />
    </div>
  );
};

export default App;
