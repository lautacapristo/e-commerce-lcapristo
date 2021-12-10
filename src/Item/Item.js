import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Item({prod}) {
    return (
        <div key ={prod.id} className='col-lg-3'>
            
        <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src= {`${prod.foto}`} />
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
