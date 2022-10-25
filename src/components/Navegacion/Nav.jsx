import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./Fotos/Logo.png";

function Barra_nav() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/inicio">
          <img alt= "Logo" src={Logo} width="30" height="30" border-radius= "50" className="d-inline-block align-top"/>{" "}
          El Boliche
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/promociones">Promociones</NavDropdown.Item>
              <NavDropdown.Item href="/nuevos+productos">Nuevos Productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/todos+los+productos">Todos los Productos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/cliente">Clientes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra_nav;
