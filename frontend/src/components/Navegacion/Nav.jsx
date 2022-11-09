import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "./Fotos/Logo.png";
import { useSelector } from "react-redux";

function Barra_nav() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/inicio">
          <img alt= "Logo" src={Logo} width="30" height="30" border-radius= "50" className="d-inline-block align-top"/>{" "}
          El Boliche
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" , fontWeight: 400}}>
            <Nav.Link className="sub" href="/inicio">Inicio</Nav.Link>
            <NavDropdown className="sub" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item className="caja" href="/promociones">Promociones</NavDropdown.Item>
              <NavDropdown.Item className="caja"href="/nuevos+productos">Nuevos Productos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="caja" href="/todos+los+productos">Todos los Productos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="sub" href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link className="sub" href="/cliente">Clientes</Nav.Link>
            <Nav.Link href="/carrito">
            <div className="nav-bag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-handbag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
              </svg>
              <span className="bag-quantity">
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra_nav;
