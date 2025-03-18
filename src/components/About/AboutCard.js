import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Esse site nasceu como um desafio de uma disciplina da faculdade. A ideia era sair da zona de conforto e desenvolver algo usando uma tecnologia diferente
          da que a gente costumava programar (no caso, <b className="purple">Java</b>). <br/>A proposta era explorar novas ferramentas de <b className="purple">desenvolvimento web</b> e 
          apresentar o projeto no final da matéria. Foi aí que decidi criar esse <b className="purple">portfólio</b> usando <b className="purple">React Native</b>. 
          No começo, era só um trabalho para nota, mas acabou se tornando algo muito maior. Mesmo depois de formado, continuei adaptando e evoluindo o projeto, 
          e ele segue me acompanhando na minha jornada como dev. <br/>Hoje, mais do que um simples portfólio, esse projeto representa minha evolução e aprendizado. E a melhor parte? 
          Sempre tem algo novo pra melhorar!
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
