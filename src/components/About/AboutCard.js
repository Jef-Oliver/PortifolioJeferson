import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá pessoal, eu sou <span className="purple">Jeferson Oliveira </span>
            moro em <span className="purple">Palmas-TO</span>
            <br />
            Atualmente trabalho como desenvolvedor backend na Secretaria da Administração-TO.
            <br />
            Concluí minha graduação em Sistemas para Internet no IFTO-Campus Palmas.
            <br />
            <br />
            Além da programação em si, estudo também...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Governança de TI
            </li>
            <li className="about-activity">
              <ImPointRight /> Gerencia de projetos
            </li>
            <li className="about-activity">
              <ImPointRight /> Engenharia de requisitos
            </li>
          </ul>

          <p style={{ color: "#87CEEB" }}>
            "Além do backend, gosto de explorar novas tecnologias em meus momentos de lazer e também estudo sobre criação de jogos."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
