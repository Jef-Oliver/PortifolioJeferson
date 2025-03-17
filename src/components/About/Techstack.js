import React from 'react';
import { Col, Row, Tooltip, OverlayTrigger } from 'react-bootstrap';
import {
  DiPython,
} from 'react-icons/di';
import {
  SiPostgresql,
  SiDjango,
  SiFlask,

} from 'react-icons/si';

function Techstack() {
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
          overlay={renderTooltip('PostgreSQL')}>
          <div><SiPostgresql /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Python')}>
          <div><DiPython /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Django')}>
          <div><SiDjango /></div>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip('Flask')}>
          <div><SiFlask /></div>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Techstack;
