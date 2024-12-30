import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWindows,
  SiGithub,
  SiNetlify,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows size={50} />
        <p className="tech-icon-label">Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50} />
        <p className="tech-icon-label">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={50} />
        <p className="tech-icon-label">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify size={50} />
        <p className="tech-icon-label">Netlify</p>
      </Col>
    </Row>
  );
}

export default Toolstack;