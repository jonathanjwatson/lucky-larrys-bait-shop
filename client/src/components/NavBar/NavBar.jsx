import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Lucky Larry's Bait Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink
              to="/about"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              activeStyle={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
