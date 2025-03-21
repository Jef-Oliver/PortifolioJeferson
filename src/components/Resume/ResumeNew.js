import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv-jeferson.pdf";
import image from "../../Assets/jeferson.png"; // Caminho da imagem corrigido
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(null); // Inicialize como null para definir após montagem

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth); // Atualiza o estado com a largura atual da janela
    };

    updateWidth(); // Chama imediatamente para definir o estado inicial corretamente
    window.addEventListener('resize', updateWidth); // Adiciona listener para redimensionamentos

    return () => {
      window.removeEventListener('resize', updateWidth); // Limpa o listener ao desmontar
    };
  }, []);

  // Função para determinar o tamanho da imagem baseado na largura da janela
  const imageSize = width > 800 ? "45%" : width > 500 ? "65%" : "75%";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", padding: "20px" }}>
          {width && ( // Só renderiza a imagem quando width está definido
            <img
              src={image}
              alt="Currículo Jeferson"
              style={{ width: imageSize, height: "auto" }}
              loading="lazy"  // Lazy loading nativo aplicado
            />
          )}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Baixar Currículo
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
