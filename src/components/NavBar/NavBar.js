import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

//deberia hacer 1 por una para que sea menos pesado
//por ejemplo, import Navbar from 'react-bootstrap/NavBar'

function NavBar() {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"className='py-3'>   
  <Container>


  <Navbar.Brand href="#home" className="quc">Quilmes Urban Clothes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navCentro">
      <Nav.Link href="#features" className="letraNav">Remeras</Nav.Link>
      <Nav.Link href="#pricing" className="letraNav">Pantalones</Nav.Link>
      <Nav.Link href="#pricing" className="letraNav">Gorras</Nav.Link>
      <Nav.Link href="#pricing" className="letraNav">Lentes </Nav.Link>
    </Nav>
    <Nav>
    
      <Nav.Link eventKey={2} href="#memes">
        <CartWidget className="carrito" />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
    
  </Container>
  </Navbar>
  <h2 className="col-lg-12 text-center marginh2">TIENDA ONLINE </h2>
 
 {/* <div>
   <p className="imagenFondo row"> 
    <em className="col-lg-6 ladoIzq"> Lado izquierdo </em>
     <em className="col-lg-6 ladoDer"> Lado derecho </em>  </p>
   </div> */}
        </div>
        
    )
}

export default NavBar
