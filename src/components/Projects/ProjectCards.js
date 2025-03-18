import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './ProjectCards.css';  

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
  {/* Container para exibir uma ou duas imagens */}
  <div className="project-images-container">
    <Card.Img
      variant="top"
      src={props.imgPath}
      alt="card-img"
      className="project-image"
      loading="lazy"
    />
    {props.imgPath2 && (
      <Card.Img
        variant="top"
        src={props.imgPath2}
        alt="card-img"
        className="project-image"
        loading="lazy"
      />
    )}
    {props.imgPath3 && (
      <Card.Img
        variant="top"
        src={props.imgPath3}
        alt="card-img-3"
        className="project-image"
        loading="lazy"
      />
    )}
  </div>
  
  <Card.Body className="d-flex flex-column justify-content-between">
      <div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </div>
      <div> {/* Div para os botões */}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </div>
    </Card.Body>
  </Card>

  );
}

export default ProjectCards;
