import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/ReactLibrary.png";
import projectImg2 from "../assets/img/Week4Project.png";
import projectImg3 from "../assets/img/Week6Project.png";
import ProjectCard from "./ProjectCard";
import colour2 from '../assets/img/color-sharp2.png'
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Library E-Com",
      description: "[project description]",
      imageURL: projectImg1,
      projectLink: 'https://rsa-library-11qajnqpl-gugubuthelezi.vercel.app/',
    },
    {
      title: "Movie database",
      description: "[project description]",
      imageURL: projectImg2,
      projectLink: 'https://gugubuthelezi.github.io/Week-4-Final-Project/',
    },
    {
      title: "React media database",
      description: "[project description]",
      imageURL: projectImg3,
      projectLink: 'https://diamond-plus-react.vercel.app',
    },
  ];
  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
            <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__rubberBand" : ""
              }
            >
              <h2>Projects</h2>
              <p> Leveraging HTML, CSS, JavaScript, and modern frameworks, I've created visually appealing websites and applications that reflect my technical expertise.</p>
              </div>
          )}
        </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
                {/* <Nav variant="pills" className="nav-pills justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav> */}
                
                <Tab.Content>
                    <Tab.Pane eventKey={'first'}>
                        <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard key={index} {...project} />
                                    )
                                })
                            }
                        </Row>

                    </Tab.Pane>
                    {/* <Tab.Pane eventKey={'second'}>Projects page 2</Tab.Pane>
                    <Tab.Pane eventKey={'third'}>Projects page 3</Tab.Pane> */}

                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colour2} alt="" className="background__image-right"/>
      </section>
    </>
  );
}

export default Projects;
