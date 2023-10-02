import React from "react";
import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import projectImg1 from "../assets/img/ReactLibrary.png";
import projectImg2 from "../assets/img/Week4Project.png";
import projectImg3 from "../assets/img/Week6Project.png";
import projectImg4 from "../assets/img/disneyplus.png";
import ProjectCard from "./ProjectCard";
import colour2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

function Projects() {
  const projects = [
    {
      title: "Library E-Com",
      tools: "HTML, CSS, JavaScript, React",
      description:
        "Created a library website for the average library that contains a specific number of books. Also makes use of a shopping cart.",
      imageURL: projectImg1,
      projectLink: "https://rsa-library-11qajnqpl-gugubuthelezi.vercel.app/",
    },
    {
      title: "Movie database",
      tools: "HTML, CSS, JavaScript",
      description:
        "Created a movie website that uses a public api to display the 10 movies that are most accurate to the search input.",
      imageURL: projectImg2,
      projectLink: "https://gugubuthelezi.github.io/Week-4-Final-Project/",
    },
    {
      title: "React media database",
      tools: "HTML, CSS, JavaScript, React",
      description:
        "Created a movie website that uses a public api to display the 10 movies that are most accurate to the search input. Also offers further details on each individual item.",
      imageURL: projectImg3,
      projectLink: "https://diamond-plus-react.vercel.app",
    },
    {
      title: "Disney+ clone",
      tools: "React, Redux, Firebase",
      description:
        "Developed a clone using React, Firebase and Redux. It mirrors the functionality of disney+, offering an  engaging experience. It delivers a responsive and dynamic user interface",
      imageURL: projectImg4,
      projectLink: "https://disney-plus-clone-eadec.web.app/",
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
                    <p>
                      {" "}
                      Leveraging HTML, CSS, JavaScript and modern frameworks,
                      I've created visually appealing websites and applications
                      that reflect my technical expertise.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
                <Nav
                  variant="pills"
                  className="nav-pills justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey={"first"}>
                    <Row>
                      {projects
                        .map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })
                        .slice(0, 2)}
                    </Row>
                  </Tab.Pane>
                  </Tab.Content>
                  {/* <Tab.Pane eventKey={'second'}>Projects page 2</Tab.Pane> */}
                  <Tab.Content>
                  <Tab.Pane eventKey={"second"}>
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      }).slice(2)}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colour2} alt="" className="background__image-right" />
      </section>
    </>
  );
}

export default Projects;
