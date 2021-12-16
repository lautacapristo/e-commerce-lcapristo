import React from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'
import './ItemDetail.css'

function ItemDetail({productos}) {

console.log(productos);

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
  
</ListGroup>
            </Card.Text>
            <Button variant="danger" size="lg" className="w-100"> Agregar al carrito </Button>
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
