import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col sm={6}>
              <img src={logo} alt="logo" />
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              
                <div className="social-icon">
                  <a href="/#">
                    <img src={navIcon1} alt="" />
                  </a>
                  <a href="https://github.com/GuguButhelezi/" target="_blank" className="git">
                    <Github />
                  </a>
                </div>
              <p> Gugu Buthelezi &copy; 2023</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
