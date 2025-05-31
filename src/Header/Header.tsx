// Header.tsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#145c39' }} variant="dark" expand="lg" className="py-3">
      <Container>
      <Navbar.Brand as={NavLink} to="/">
      <img
        src="./logo.png"
        width="30"
        height="30"
        alt="Logo"
        className="d-inline-block align-top me-2"
      />
      <span className="text-white">Belém Tour Guide</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
      <Nav className="ms-auto">
      <Nav.Link as={NavLink} to="/">Início</Nav.Link>
      <Nav.Link as={NavLink} to="/pontos-turisticos">Pontos Turísticos</Nav.Link>
      <Nav.Link as={NavLink} to="/culinaria">Culinária</Nav.Link>
      <Nav.Link as={NavLink} to="/sugestoes">Sugestões</Nav.Link>
      <Nav.Link as={NavLink} to="/sobre">Sobre</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
