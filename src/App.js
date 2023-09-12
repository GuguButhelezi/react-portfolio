import { useState } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Headroom from "react-headroom";

function App() {
  return (
    <>
      <div className="App">
        
          <Navigation />
          
        
              <Banner />
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__backInLeft" : ""
              }
            >
              <Stack />
            </div>
          )}
        </TrackVisibility>
        
              <Projects />
            
        
              <Contact />
            
        <Footer />
      </div>
    </>
  );
}

export default App;
