import React from "react";
import "./App.css";
import "./styles/hover-min.css"
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Works from "./Components/Works/works";
import About from "./Components/AboutMe/about";
import Contact from "./Components/Contact/contact";
import ContactForm from "./Components/ContactForm/ContactForm";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Contact />
      <ContactForm />
      </div>
  );
}
