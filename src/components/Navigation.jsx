import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/img/logo.svg"
import NavIcon1 from "../assets/img/nav-icon1.svg"
import NavIcon2 from "../assets/img/nav-icon2.svg"
import NavIcon3 from "../assets/img/nav-icon3.svg"
import { Github } from "react-bootstrap-icons";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function whileScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", whileScroll);

    return window.removeEventListener("scroll", whileScroll);
  }, []);

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="home">
            <img src={Logo} alt="this is the logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={NavIcon1} />
                </a>
                <a href="#" className="git">
                  <Github />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("i forgot what to do with this")}>
                <span>I would love to chat!</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}