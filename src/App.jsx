import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Works from "./Components/Works/works";
import About from "./Components/AboutMe/about";
import Contact from "./Components/Contact/contact";

export default function App() {
  return (
    <div className="App">
      <div className="section1">
        <Navbar />
        <Hero />
      </div>
      <div className="section2">
      <Works />
      </div>
      <About />
      <Contact />
    </div>
  );
}
