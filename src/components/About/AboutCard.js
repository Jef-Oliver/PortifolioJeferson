import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p>
              Minha jornada profissional é marcada pela busca constante por soluções eficientes e inovadoras no desenvolvimento de sistemas. <br />
              Atualmente, trabalho na <b className="purple">Secretaria da Administração - TO</b>, responsável pela manutenção e aprimoramento do <b className="purple">WebPonto</b>, sistema legado de registro de ponto digital em <b className="purple">ASP</b>, garantindo sua estabilidade, segurança e desempenho. <br />
              Além disso, administro <b className="purple">bancos de dados PostgreSQL</b>, otimizando consultas e garantindo a integridade dos dados. <br />
            </p>

            <p>
              Atuo no <b className="purple">desenvolvimento de novas funcionalidades</b> e na <b className="purple">integração de sistemas</b>, sempre focado na eficiência operacional e experiência do usuário. <br />
              No projeto <b className="purple">Posse Digital</b>, fui responsável pelo <b className="purple">levantamento de requisitos</b> e implementação de soluções seguras e intuitivas para digitalizar processos burocráticos. <br />
            </p>

            <p>
              Também desenvolvo projetos com <b className="purple">Python e Django</b>, incluindo um <b className="purple">sistema de registro de ponto por reconhecimento facial</b>, aplicando <b className="purple">Inteligência Artificial</b> para automação e análise de dados. <br />
              Trabalhando com <b className="purple">Scrum</b>, otimizo o fluxo de desenvolvimento, garantindo entregas ágeis e eficientes. <br />
            </p>

            <p>
              Minha experiência inclui <b className="purple">Governança de TI e Gerência de Projetos</b>, garantindo processos estruturados e alinhados às melhores práticas do mercado. <br />
              Além disso, realizo <b className="purple">diagnóstico de bugs</b>, otimização de desempenho e documentação técnica para manter a evolução contínua dos sistemas. <br />
            </p>

            <p>
              Meu foco é <b className="purple">desenvolver soluções que agreguem valor real ao usuário</b>. <br />
              E a melhor parte? <b className="purple">Sempre há algo novo para aprender e melhorar!</b>
            </p>          
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
