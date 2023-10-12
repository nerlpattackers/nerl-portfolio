// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
function NavigationBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="nav-color nav-font sticky-top">
      <Container>
        <Navbar.Brand href="#home" className="">NNDG</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
    
          </Nav>
          <Nav>
            <Nav.Link href="home" className="hover">Home</Nav.Link>
            <Nav.Link href="projects" className="hover">
              Projects
            </Nav.Link>
            <Nav.Link href="contact" className="hover">Contact</Nav.Link>
            <Nav.Link href="about-me" className="hover">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;