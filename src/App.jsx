import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/hover-min.css";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Works from "./Components/Works/works";
import About from "./Components/AboutMe/about";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Preloader from "./Components/preloader/preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); //time
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          {/* Main Content is displayed once loading is false */}
          <Navbar />
          <Hero />
          <Works />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
