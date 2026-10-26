import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const WebNavbar = () => {
  return (
    <Navbar expand="lg" className="text-black w-75 mx-auto border border-dark">
      <Container>
        <Navbar.Brand href="#home" >
          Student managment system
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/add"}>
              Add
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WebNavbar;
