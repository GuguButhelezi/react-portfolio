import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, Github } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    " Frontend Software Engineer",
    "Very single and handsome",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInLeft" : ""
                    }
                  >
                    <span className="tagline">
                      This is some of what I can do
                    </span>
                    <h1>
                      {`Hello I'm Gugu Buthelezi, `}
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      I'm a 24 year old South African with a strong passion for
                      building web applications with great user experiences.
                    </p>
                    <a href="#connect">
                      <button>
                        Let's connect <ArrowRightCircle size={24} />
                      </button>
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInRight" : ""
                    }
                  >
                    <img src={headerImage} alt="header image" />
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
