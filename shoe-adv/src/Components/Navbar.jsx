// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleCart }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          ShoeStore
        </Link>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/categories" className="nav-link">
          Categories
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </div>
      <div className="nav-right">
        <button onClick={toggleCart}>🛒 Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
