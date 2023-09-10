import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

function ProjectCard({ title, description, imageURL, projectLink }) {
  return (
    <>
      <Col md={6}>
        <div className="project__image-box">
          <img src={imageURL} alt="" />
          <div className="project__text">
            <h4>{title}</h4>
            <span>{description}</span>
            <div >
              <a href={projectLink} target="_blank">
                <Link className="proj__link"/>
              </a>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectCard;
