import React from "react";
import { Container, Navbar, Nav, FormControl } from "react-bootstrap";

import routes from "../routes";

import '../styles/components/PrimaryNav.css';

const PrimaryNav = () => (
  <Navbar expand="md" bg="dark" variant="dark" id="primary-navbar">
    <Container fluid="lg">
      <Navbar.Toggle aria-controls="primary-navbar-collapse" />
      <div className="search-wrapper ms-auto w-auto flex-grow-1">
        <FormControl type="text" placeholder="Search..." aria-label="Search" variant="outline-light" />
      </div>
      <Navbar.Collapse id="primary-navbar-collapse" className="flex-grow-0 me-1">
        <Nav className="me-0">
          {routes.map(({ path, label }) => <Nav.Link href={path} key={label}>{label}</Nav.Link>)}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default PrimaryNav;
