import React from "react";
import "./navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fill-opacity="1"
            d="M0,192L11.4,165.3C22.9,139,46,85,69,90.7C91.4,96,114,160,137,154.7C160,149,183,75,206,58.7C228.6,43,251,85,274,133.3C297.1,181,320,235,343,250.7C365.7,267,389,245,411,213.3C434.3,181,457,139,480,128C502.9,117,526,139,549,176C571.4,213,594,267,617,256C640,245,663,171,686,128C708.6,85,731,75,754,69.3C777.1,64,800,64,823,80C845.7,96,869,128,891,128C914.3,128,937,96,960,85.3C982.9,75,1006,85,1029,101.3C1051.4,117,1074,139,1097,170.7C1120,203,1143,245,1166,266.7C1188.6,288,1211,288,1234,282.7C1257.1,277,1280,267,1303,234.7C1325.7,203,1349,149,1371,160C1394.3,171,1417,245,1429,282.7L1440,320L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="nav-wrapper">
        <div className="nav-el">
          <div className="name">
            <p>Soumajit</p>
          </div>
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={`links ${isMenuOpen ? "active scale-in-ver-top" : ""}`}>
            <a href="#abt-tag">About</a>
            <a href="#ctc-tag">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
