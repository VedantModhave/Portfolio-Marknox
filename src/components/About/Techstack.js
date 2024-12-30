import React from "react";
import { Col, Row } from "react-bootstrap";

// Import images from the Assets folder
import pythonImg from "../../Assets/skills/python.png";
import javaImg from "../../Assets/skills/java.png";
import htmlImg from "../../Assets/skills/html.png";
import cssImg from "../../Assets/skills/css.png";
import javascriptImg from "../../Assets/skills/js.png";
import reactImg from "../../Assets/skills/react.png";
import firebaseImg from "../../Assets/skills/firebase.png";
import powerbiImg from "../../Assets/skills/powerbi.svg";
import sqlImg from "../../Assets/skills/sql.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pythonImg} alt="Python" className="tech-icon-img" />
        <p className="tech-icon-label">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={javaImg} alt="Java" className="tech-icon-img" />
        <p className="tech-icon-label">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={htmlImg} alt="HTML" className="tech-icon-img" />
        <p className="tech-icon-label">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={cssImg} alt="CSS" className="tech-icon-img" />
        <p className="tech-icon-label">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={javascriptImg} alt="JavaScript" className="tech-icon-img" />
        <p className="tech-icon-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={reactImg} alt="React" className="tech-icon-img" />
        <p className="tech-icon-label">React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={firebaseImg} alt="Firebase" className="tech-icon-img" />
        <p className="tech-icon-label">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={powerbiImg} alt="Power BI" className="tech-icon-img" />
        <p className="tech-icon-label">Power BI</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={sqlImg} alt="SQL" className="tech-icon-img" />
        <p className="tech-icon-label">SQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;