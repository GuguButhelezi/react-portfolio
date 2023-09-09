import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/html-icon.png'
import meter2 from '../assets/img/css.png'
import meter3 from '../assets/img/js-icon.png'
import meter4 from '../assets/img/react.png'
import colorSharp from '../assets/img/color-sharp.png'

function Stack() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>
      <section className="skill" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>
                  This is my tech stack
                </h2>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                    <img src={meter1} alt="skill image" />
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="skill image" />
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="skill image" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter4} alt="skill image" />
                    <h5>React</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} className="background-image-left" alt="" />
      </section>
    </>
  );
}

export default Stack;
