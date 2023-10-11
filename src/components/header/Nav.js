import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon"; 
import "./../../App.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><CartIcon /></li> 
      </ul>
    </div>
  );
};

export default Nav;
