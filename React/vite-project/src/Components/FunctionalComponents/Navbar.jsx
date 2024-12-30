import React from "react";
import "../../assets/Navbar.css"

var Navbar = () => {
  const styling = {
    fontSize: "30px",
    textDecoration: "underline",
    color: "blue",
    textAlign: "center",
  };

  return(
  <div>
  <h1 style={styling}>This is the nav bar</h1>;
  <div box="box-model" >helooo</div>
  </div>
  )
};

export default Navbar;
