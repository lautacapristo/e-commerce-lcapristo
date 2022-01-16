import React from 'react'
import { Card, ListGroup, Button, Form } from 'react-bootstrap'
import './ItemDetail.css'
import Count from '../Count/Count'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import  Footer from '../Footer/Footer'

function ItemDetail({products}) {

const [cart, setCart] = useState(true)

const { agregarAlCarrito } = useContext(CartContext)

const onAdd = (cantidad) => {

setCart(false);

agregarAlCarrito({...products, cantidad:cantidad})
} 

return (
        <div key ={products.id} >

        <div className="container row">
                <Card className="detail col-lg-6" >
                <Card.Img variant="top" src= {products.photo} className="fotoDetail" />
                </Card>

        <div className="col-lg-5">
                <h2 className=" text-center my-3"> {products.name} </h2>
                <h3 className="my-4"> <b>  {products.price} </b> </h3> 
        <div className="talle">
                <label><em>TALLE </em></label>
                <Form.Select aria-label="Default select example" className="bordes" size="md">
                        <option>S</option>
                        <option value="1">M</option>
                        <option value="2">L</option>
                        <option value="3">XL</option>
                </Form.Select>
        </div>

        <div>
                <h4 className="my-5 bordes"> Caracteristicas </h4>
                <ListGroup>
                        <ListGroup.Item>{products.description}</ListGroup.Item>
                        <ListGroup.Item> {products.marca} </ListGroup.Item>
                </ListGroup>
        </div>

        <div className="my-4">
{cart ? <Count stock = {products.stock} onAdd = {onAdd} /> 
        : <div> <Button size="lg" className="w-100 bg-oscuro my-3"><Link to="/cart" className="c-white"><em>Ir al carro </em></Link></Button>
                <Button size="lg" className="w-100 bg-oscuro"><Link to="/" className="c-white"><em>¡Quiero seguir comprando! </em></Link></Button>
        </div>
        }        
        </div>
</div>
</div>

        <Footer />
             </div>
             )
}

export default ItemDetail


