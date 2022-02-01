import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky='top' expand="md">
      <Container className='justify-content-between'>
        <Navbar.Brand href="#home">Jose Mario</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hola</Nav.Link>
            <Nav.Link href="#features">Proyectos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <div>
            <Button variant='warning'>Currículum</Button>
          </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

