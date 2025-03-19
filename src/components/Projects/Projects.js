import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cap1 from "../../Assets/Projects/cap1.png";
import jogo from "../../Assets/Projects/jogo.png";
import sin4 from "../../Assets/Projects/sin4.png";
import sin3 from "../../Assets/Projects/sin3.png";
import sin2 from "../../Assets/Projects/sin2.png";
import posse1 from "../../Assets/Projects/posse1.jpeg";
import posse2 from "../../Assets/Projects/posse2.jpeg";
import posse3 from "../../Assets/Projects/posse3.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">Recentes </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", alignItems: "stretch" }}>
      {/* Primeira linha - Posse Digital com altura controlada */}
      <Col md={6} className="project-card d-flex justify-content-center align-items-start">
        <ProjectCard
          imgPath={posse1}
          isBlog={false}
          title="Posse Digital - TO"
          ghLink="https://www.linkedin.com/in/jeefisantos/details/projects/"
        />
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingTop: "10px", alignItems: "stretch" }}>
      {/* Segunda linha - Demais projetos */}
      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={cap1}
          isBlog={false}
          title="Simulador de Rescisão em Python e Flask"
          ghLink="https://github.com/Jef-Oliver/simulador-rescisao-python"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={sin4}
          imgPath2={sin3}
          imgPath3={sin2}
          isBlog={false}
          title="Simple Picpay"
          ghLink="https://github.com/Jef-Oliver/simplePicpay"
        />
      </Col>

      <Col md={4} className="project-card">
        <ProjectCard
          imgPath={jogo}
          isBlog={false}
          title="Jogo RPG - Python"
          ghLink="https://github.com/Jef-Oliver/Jogo-RPG-Python"
        />
      </Col>
    </Row>
      </Container>
    </Container>
  );
}
export default Projects;