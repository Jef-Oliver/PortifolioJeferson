import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              <strong>Analista de Sistemas | Desenvolvedor Backend</strong> apaixonado por transformar desafios complexos em soluções tecnológicas eficientes. Com mais de 4 anos de experiência dedicados à <strong>modernização de sistemas corporativos</strong>, especialmente na área de <strong>gestão de ponto e RH</strong>, meu foco é combinar profundo conhecimento técnico com uma compreensão clara das regras de negócio.
            </p>
            <p className="home-about-body">
              Minha trajetória inclui a liderança na evolução de sistemas legados críticos, como o <strong>Webponto (ASP Clássico)</strong>, introduzindo tecnologias modernas como <strong>Python (Django/Flask)</strong> e <strong>Inteligência Artificial</strong> (para reconhecimento facial e automação), além de otimizações significativas em bancos de dados <strong>PostgreSQL</strong> que resultaram em melhorias drásticas de performance.
            </p>
            <p className="home-about-body">
              Sou especialista em <strong>arquitetura de sistemas backend</strong>, desenvolvimento de <strong>APIs RESTful</strong> e integração de bancos de dados, sempre buscando soluções <strong>escaláveis, seguras e de alta performance</strong>. Acredito no poder da tecnologia para otimizar processos e na importância do <strong>aprendizado contínuo</strong> para me manter atualizado com as últimas inovações.
            </p>

            <br />
            <i>
            🚀 Apaixonado por tecnologia, inovação e aprendizado contínuo.
            </i>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SIGA-ME EM</h1>
            <p>
              Sinta-se a vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jef-Oliver"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jeefisantos/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jeefisantos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
