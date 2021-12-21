import React from 'react'
import { Card, ListGroup, Button } from 'react-bootstrap'
import './ItemDetail.css'
import Contador from '../Contador/Contador'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

function ItemDetail({productos}) {

const [carta, setCarta] = useState(true)

const {cartList, agregarAlCarrito} = useContext(CartContext)

const onAdd = (qualityToAdd) => {

setCarta(false);
console.log(qualityToAdd)
agregarAlCarrito({...productos, cantidad:qualityToAdd})
} 

console.log(cartList)

    return (
                 <div key ={productos.id} >
              
                 <Card className="detail" >
            <Card.Img variant="top" src= {productos.foto} className="fotoDetail" />
            <Card.Body>
            <Card.Title className="text-center">{productos.name} </Card.Title>
            <Card.Text> 
            
            <ListGroup>
  <ListGroup.Item>{productos.caracteristica}</ListGroup.Item>
  <ListGroup.Item>{productos.price}</ListGroup.Item>
  <ListGroup.Item> {productos.marca} </ListGroup.Item>
  {carta ? <Contador stock = {productos.stock} onAdd = {onAdd} /> : <Button variant="danger" size="lg" className="w-100"><Link to="/cart">Ir al carro </Link></Button> }
  
</ListGroup>
            </Card.Text>
            
            </Card.Body>
            </Card>
     
             </div>
             )
}

export default ItemDetail

// import React from 'react'
// import { Card } from 'react-bootstrap'
// import './ItemDetail.css';



// function ItemDetail({promise}) {
//     return (
//         <div key ={promise.id}>
            
//         <Card className="detail" >
//    <Card.Img variant="top" src= {`${promise.foto}`} className="fotoDetail" />
//    <Card.Body>
//    <Card.Title>{`${promise.name}`} </Card.Title>
//    <Card.Text>
//    {`${promise.price}`}
//    </Card.Text>
   
//    </Card.Body>
//    </Card>
   
//     </div>
//     )
// }

// export default ItemDetail
