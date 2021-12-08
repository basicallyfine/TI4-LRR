import React from "react";
import { Container, Navbar, Nav, FormControl } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import routes from "../../routes";

import './PrimaryNav.css';

const PrimaryNav = () => {
  const location = useLocation();

  return (
    <Navbar expand="md" bg="dark" variant="dark" id="primary-navbar">
      <Container fluid="lg">
        <Navbar.Toggle aria-controls="primary-navbar-collapse" />
        <div className="search-wrapper ms-auto w-auto flex-grow-1">
          <FormControl type="text" placeholder="Search..." aria-label="Search" variant="outline-light" />
        </div>
        <Navbar.Collapse id="primary-navbar-collapse" className="flex-grow-0 me-1">
          <Nav className="me-0">
            {routes.map(({ path, label }) => <Link to={path} key={label} className={`nav-link ${location.pathname === path ? 'active' : ''}`}>{label}</Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PrimaryNav;
