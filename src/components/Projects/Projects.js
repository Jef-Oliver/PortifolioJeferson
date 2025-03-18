import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cap1 from "../../Assets/Projects/cap1.png";
import jogo from "../../Assets/Projects/jogo.png";
import sin4 from "../../Assets/Projects/sin4.png";
import sin3 from "../../Assets/Projects/sin3.png";
import sin2 from "../../Assets/Projects/sin2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", alignItems: "stretch" }}>
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
