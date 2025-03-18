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
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME<span className="purple"> APRESENTAR </span> A VOCÊ
            </h1>
            <p className="home-about-body">
              <br />Desenvolvedor com experiência em: 
              <i>
                <b className="purple"> Python, Django, Flask, PostgreSQL e IA  </b>
              </i>
              <br />
              <br />
              especializado na criação e manutenção de sistemas robustos e escaláveis. Trabalho com desenvolvimento de APIs, otimização de performance e 
              integração de bancos de dados, sempre focado em eficiência, segurança e boas práticas de desenvolvimento.&nbsp;
              <br />
              <br />
              Atualmente, atuo no desenvolvimento e aprimoramento de sistemas <b className="purple">backend</b>, garantindo estabilidade, desempenho e escalabilidade para diferentes aplicações. 
              Possuo experiência com modernização de sistemas legados, além de otimizações para <b className="purple">bancos de dados </b><b className="purple">SQL</b>.
              <br />
              <br />
              Tenho conhecimento em <b className="purple">Inteligência Artificial</b> aplicada ao desenvolvimento, além de experiência com metodologias ágeis como <b className="purple">Scrum</b>. 
              Gosto de explorar novas tecnologias e estou sempre em busca de desafios que me permitam crescer profissionalmente.
              <br />
              <br />
              Sou formado em <b className="purple">Sistemas para Internet</b>, tive uma base sólida em <b className="purple">Java, Spring Boot, HTML, CSS, JavaScript e desenvolvimento mobile. </b> 
              Durante minha formação, tive contato com projetos práticos e metodologias modernas, aprimorando minha capacidade de solucionar problemas e construir sistemas eficientes.
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
