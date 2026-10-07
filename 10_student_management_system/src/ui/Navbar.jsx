import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const WebNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-dark w-75 mx-auto rounded-4" >
      <Container>
        <Navbar.Brand href="#home" className="text-white">Student managment system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"} className="text-white">Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/add"} className="text-white">Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WebNavbar;
