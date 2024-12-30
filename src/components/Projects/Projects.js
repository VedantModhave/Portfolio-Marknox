import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sign from "../../Assets/Projects/sign.png";
import ngo from "../../Assets/Projects/ngo.png";
import mentor from "../../Assets/Projects/mentor.png";
import finance from "../../Assets/Projects/finance.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ height: "400px", width: "450px" }}>
            <ProjectCard
              imgPath={ngo}
              isBlog={false}
              title="NGO-Hub"
              description="A comprehensive platform for efficient NGO management, featuring user-friendly interfaces, secure authentication, and role-based access for managing volunteers, admins, and other operational aspects."
              ghLink="https://github.com/VedantModhave/NFC_3.0_Status200"
              demoLink="https://nfcngo-41f2b.firebaseapp.com/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ height: "400px", width: "450px" }}>
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Signexo"
              description="A Digital Signature Tool, a simple, secure website built using React.js and Firebase to sign your PDFs with authentication"
              ghLink="https://github.com/VedantModhave/Signexo"
              demoLink="https://pdftron-sign-app-bf74e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ height: "400px", width: "450px" }}>
            <ProjectCard
              imgPath={mentor}
              isBlog={false}
              title="MentorConnect"
              description="A platform connecting candidates with industry mentors for career guidance, skill development, and employment support through automated scheduling and integrated virtual sessions."
              ghLink="https://github.com/Jatin-gorana/SIH_Status200"
              demoLink="https://sih-mentorconnect.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ height: "400px", width: "450px" }}>
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinGyaan"
              description="A comprehensive platform designed to facilitate efficient management of Non-Governmental Organizations(NGOs). It allows users to manage volunteers and admins and various other aspects to ensure smooth operations."
              ghLink="https://github.com/Jatin-gorana/Codeissance_Status200"
              demoLink="https://codeissance2024.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
