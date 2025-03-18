import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="home-row">
            {/* DESCRIÇÃO */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 19 }} className="heading">
                Olá, tudo bem ?{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Sou
                <strong className="main-name"> Jeferson Oliveira</strong>
              </h1>

              <div style={{ padding: 70, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* NOVO CONTAINER DA IMAGEM */}
            <Col md={5} className="home-image-container">
              <Container className="home-image-wrapper">
                <Tilt>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="home-main-img"
                    loading="lazy"
                  />
                </Tilt>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;