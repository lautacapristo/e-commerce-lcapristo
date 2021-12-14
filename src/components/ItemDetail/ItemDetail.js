import React from 'react'
import { Card } from 'react-bootstrap'
import './ItemDetail.css';



function ItemDetail({promise}) {
    return (
        <div key ={promise.id}>
            
        <Card className="detail" >
   <Card.Img variant="top" src= {`${promise.foto}`} className="fotoDetail" />
   <Card.Body>
   <Card.Title>{`${promise.name}`} </Card.Title>
   <Card.Text>
   {`${promise.price}`}
   </Card.Text>
   
   </Card.Body>
   </Card>
   
    </div>
    )
}

export default ItemDetail
