import { Navbar, Container, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom'

//deberia hacer 1 por una para que sea menos pesado
//por ejemplo, import Navbar from 'react-bootstrap/NavBar'

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
  {/* <h2 className="col-lg-12 text-center marginh2" >TIENDA ONLINE </h2> */}
 
 {/* <div>
   <p className="imagenFondo row"> 
    <em className="col-lg-6 ladoIzq"> Lado izquierdo </em>
     <em className="col-lg-6 ladoDer"> Lado derecho </em>  </p>
   </div> */}
        </div>
        
    )
}

export default NavBar
