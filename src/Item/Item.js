import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'

function Item({prod}) {
    return (
        <div key ={prod.id}>
            
        <Card className="cardStyle">
   <Card.Img variant="top" src= {`${prod.foto}`} className="cardFoto" />
   <Card.Body>
   <Card.Title>{`${prod.name}`} </Card.Title>
   <Card.Text>
   {`${prod.price}`}
   </Card.Text>
   <Button variant="primary">Comprar</Button>
   </Card.Body>
   </Card>
   
    </div>
    )
}

export default Item
