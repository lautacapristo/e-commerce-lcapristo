import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button } from 'react-bootstrap'
import './Cart.css';
import { Link } from 'react-router-dom';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer'

function Cart() {
const { cartList, borrarCarro, total, deleteItem, alert} = useContext(CartContext)
    
if (total() === 0) {
    return (

    <div className="row carritoFondo">            
<SubTitle />
{alert()}
<p className="text-center aviso col-lg-12">No hay productos en el carrito <Button variant="link" className="col-lg-12 w-75" ><Link className="linkQuc" to="/" > <em> Volver a la tienda </em> </Link></Button>  </p>
<Footer /> 

    </div>
)}

    return (
        
    <div className="carritoFondo row">

<SubTitle />
{ cartList.map(prod => <div key= {prod.id} className="col-lg-12 itemscard" > 

<Card className="cartStyle w-75">
    <Card.Img variant="top" src= {`${prod.photo}`} className="cartFoto" />
    <Card.Body className="card-body">
    <Card.Title  className="text-center c--white borderCard">{`${prod.name}`} </Card.Title>
    <Card.Text className="text-center c--white">
    Precio: {`${prod.price}`}
    </Card.Text>
    <Card.Text className="text-center c--white">
    Subtotal: {`$${prod.price.replace("$", " ")*prod.cantidad}`}
    </Card.Text>
    <Card.Text className="text-center c--white">
    Cantidad de productos: {`${prod.cantidad}`}
    </Card.Text>
    <Button variant="light" size="lg" className="w-100 " hover="true" onClick={() => deleteItem(prod.id)}>
    Eliminar producto 
    </Button>
    </Card.Body>
    </Card>
</div> 
)}

    <Button variant="dark" className="mt-4" hover="true" > <Link to="/cart/Form" className="buttonsCart"> Finalizar compra</Link>  </Button>
    <Button variant="light "className="" hover="true"  onClick={() => borrarCarro(cartList)}> Vaciar carro </Button>

<Footer /> 
        </div>
    )
}

export default Cart
