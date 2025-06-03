import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "40px" }}
            className="about-img"
          >
            {/* Imagem agora com lazy loading nativo */}
            <img
              src={laptopImg}
              alt="about"
              className="img-fluid"
              style={{ width: "120%", maxWidth: "800px", height: "auto" }} // Aumentando tamanho
              loading="lazy"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Skills </strong>  Profissionais
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple"></strong> Skills Complementares
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
