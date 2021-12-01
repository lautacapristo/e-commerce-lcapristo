import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
//deberia hacer 1 por una para que sea menos pesado
//por ejemplo, import Navbar from 'react-bootstrap/NavBar'

function NavBar() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Quilmes Urban Clothes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Remeras</Nav.Link>
      <Nav.Link href="#pricing">Pantalones</Nav.Link>
      <NavDropdown title="Accesorios" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Anillos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Colgantes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Cintos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Perfumes</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    
      <Nav.Link eventKey={2} href="#memes">
        <CartWidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>  
        </div>
    )
}

export default NavBar
