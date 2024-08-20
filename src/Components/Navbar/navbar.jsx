import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="nav-wrapper">
    <div className="nav-el">
      <div className="name">
        <p>Soumajit</p>
      </div>
      <div className="links">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
    </div>
  );
}
