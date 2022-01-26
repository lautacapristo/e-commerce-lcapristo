import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
  <div className="fix">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"className='py-3 '>   
      <Container>

        <Link to="/" className="quc">Quilmes Urban Clothes</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
      <Nav className="me-auto navCentro">
        <Link className="letraNav" to="/" >General</Link>
        <Link className="letraNav" to="/remeras" >Remeras</Link>
        <Link className="letraNav" to="/pantalones" >Pantalones</Link>
        <Link className="letraNav" to="/gorras" >Gorras</Link>
        <Link className="letraNav" to="/cintos" >Cintos</Link>

        </Nav>
      <Nav>
    
      <Nav.Link >
        <CartWidget className="carrito" />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
    
  </Container>
  </Navbar>
  </div>
        
    )
}

export default NavBar
