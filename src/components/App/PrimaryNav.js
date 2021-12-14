import React, { useRef } from "react";
import { Container, Navbar, Nav, FormControl } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import routes from "../../routes";

import './PrimaryNav.css';

const PrimaryNav = () => {
  const location = useLocation();
  const toggleButton = useRef(null);

  const closeMenu = () => {
    const button = toggleButton.current;
    if (!button) {
      console.warn('Toggle button ref not found');
      return;
    }
    if (!button.classList.contains('collapsed')) {
      button.click();
    }
  }

  return (
    <Navbar expand="md" bg="dark" variant="dark" id="primary-navbar">
      <Container fluid="lg">
        <Navbar.Toggle aria-controls="primary-navbar-collapse" ref={toggleButton} />
        <div className="search-wrapper ms-auto w-auto flex-grow-1">
          <FormControl type="text" placeholder="Search..." aria-label="Search" variant="outline-light" />
        </div>
        <Navbar.Collapse id="primary-navbar-collapse" className="flex-grow-0 me-1">
          <Nav className="me-0">
            {routes.map(({ path, label }) => (
              <Link
                to={path}
                key={label}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                onClick={() => { closeMenu(); }}
              >
                {label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PrimaryNav;
