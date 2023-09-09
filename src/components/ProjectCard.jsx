import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imageURL }) {
  return (
    <>
      <Col md={6}>
        <div className="project__image-box">
          <img src={imageURL} alt="" />
          <div className="project__text">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectCard;
