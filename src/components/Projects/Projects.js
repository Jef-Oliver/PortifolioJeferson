import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cap1 from "../../Assets/Projects/cap1.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cap1}
              isBlog={false}
              title="SciVerse"
              description="Simulador de Rescisão em Python e Flask"
              ghLink="https://github.com/Jef-Oliver/simulador-rescisao-python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cap1}
              isBlog={false}
              title="SciVerse"
              description="Simulador de Rescisão em Python e Flask"
              ghLink="https://github.com/Jef-Oliver/simulador-rescisao-python"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
