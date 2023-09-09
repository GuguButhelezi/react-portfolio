import { useState } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Banner />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
