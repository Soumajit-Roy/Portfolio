import React from "react";
import "./App"
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Works from "./Components/Works/works";
import About from "./Components/AboutMe/about";
import Contact from "./Components/Contact/contact"

export default function App(){
    return(
        <div>
        <Navbar />
        <Hero />
        <Works />
        <About />
        <Contact />
        </div>
    )
}