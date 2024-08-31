import React from "react";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="nav-wrapper">
    <div className="nav-el">
      <div className="name">
        <p>Soumajit</p>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#abt-tag">About</a>
        <a href="#ctc-tag">Contact</a>
      </div>
    </div>
    </div>
  );
}
