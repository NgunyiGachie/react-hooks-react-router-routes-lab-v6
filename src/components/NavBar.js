import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; 

function NavBar() {
  return (
    <div className="navbar"> 
      <nav>
        <NavLink exact="true" to="/" className="NavBar"> 
          Home
        </NavLink>
        <NavLink to="/directors" className="NavBar">
          Directors
        </NavLink>
        <NavLink to="/actors" className="NavBar">
          Actors
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
