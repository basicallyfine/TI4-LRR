import React, { useRef, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import routes from "../../routes";

import NavSearch from "./NavbarSearch";

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
      <Container fluid="lg" className="position-relative">
        <Navbar.Toggle aria-controls="primary-navbar-collapse" ref={toggleButton} tabIndex={1}/>
        <NavSearch />
        <Navbar.Collapse id="primary-navbar-collapse" className="flex-grow-0 me-1">
          <Nav className="me-0">
            {routes.map(({ path, label }, linkIdx) => (
              <Link
                to={path}
                key={label}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                onClick={() => { closeMenu(); }}
                tabIndex={linkIdx + 1}
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
