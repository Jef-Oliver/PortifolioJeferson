import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Texto principal atualizado e dividido em parágrafos */}
          <p style={{ textAlign: "justify" }}>
            Este espaço nasceu como um desafio acadêmico para explorar novas tecnologias além da minha zona de conforto inicial. O que começou como um projeto em React evoluiu significativamente, tornando-se não apenas um registro da minha jornada de aprendizado, mas também uma vitrine das minhas competências e projetos como <b className="purple">Analista de Sistemas | Desenvolvedor Backend</b>.
          </p>
          <p style={{ textAlign: "justify" }}>
            Ao longo do tempo, este portfólio foi adaptado e aprimorado, refletindo minha paixão por <b className="purple">desenvolvimento web</b>, <b className="purple">boas práticas de engenharia de software</b> e a busca constante por soluções eficientes e inovadoras. Ele representa meu compromisso com o <b className="purple">aprendizado contínuo</b> e a aplicação prática de conhecimentos que vão além do backend, abrangendo áreas como <b className="purple">Governança de TI</b>, <b className="purple">Gerência de Projetos</b> e <b className="purple">Engenharia de Requisitos</b>.
          </p>
          <p style={{ textAlign: "justify" }}>
            Mais do que um simples repositório, este site é um reflexo da minha evolução profissional e um convite para explorar as soluções que desenvolvi e os desafios que superei. E a melhor parte? Sempre há espaço para algo novo!
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
