import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import {
  DiJava,
} from 'react-icons/di';
import {
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiHibernate,
  SiApachemaven,
  SiAndroidstudio
} from 'react-icons/si';

function Toolstack() {
  const renderTooltip = (name) => (
    <Tooltip id={`tooltip-${name}`}>
      {name}
    </Tooltip>
  );

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>      
      <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Java')}>
          <div><DiJava /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Springboot')}>
          <div><SiSpringboot /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
          placement="top"
          overlay={renderTooltip('HTML')}>
          <div><SiHtml5 /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
          placement="top"
          overlay={renderTooltip('CSS')}>
          <div><SiCss3 /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Hibernate')}>
          <div><SiHibernate /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Maven')}>
          <div><SiApachemaven /></div>
        </OverlayTrigger>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Springboot')}>
          <div><SiSpringboot /></div>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('AndroidStudio')}>
          <div><SiAndroidstudio /></div>
        </OverlayTrigger>
      </Col> 
    </Row>
  );
}

export default Toolstack;
