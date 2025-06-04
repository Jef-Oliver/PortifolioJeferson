import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/cv-jeferson.pdf";
import image1 from "../../Assets/jeferson.png";
import image2 from "../../Assets/jeferson1.png"; 
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(null); 

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const imageSize = width > 800 ? "45%" : width > 500 ? "65%" : "75%";

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        
        <Row style={{ justifyContent: "center", position: "relative", padding: "20px" }}>
          {width && (
            <img
              src={image2}
              alt="Currículo Jeferson 2"
              style={{ width: imageSize, height: "auto" }}
              loading="lazy"
            />
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", padding: "20px" }}>
          {width && (
            <img
              src={image1}
              alt="Currículo Jeferson 1"
              style={{ width: imageSize, height: "auto" }}
              loading="lazy"
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