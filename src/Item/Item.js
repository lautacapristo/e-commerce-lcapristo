import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Item.css'
import { Link } from 'react-router-dom'

function Item({prod}) {
    return (
        <div key ={prod.id}>
            
        <Card className="cardStyle">
   <Card.Img variant="top" src= {`${prod.foto}`} className="cardFoto" />
   <Card.Body>
   <Card.Title  className="text-center">{`${prod.name}`} </Card.Title>
   <Card.Text className="text-center">
   {`${prod.price}`}
   </Card.Text>
 <Link to= {`/detalle/${prod.id}`}  >
 <Button variant="danger" size="lg" className="w-100">
    Ver detalle
  </Button>
 </Link>
   </Card.Body>
   </Card>
   
    </div>
    )
}

export default Item
