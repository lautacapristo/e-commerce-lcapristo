import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button } from 'react-bootstrap'
import './Cart.css';
import { Link } from 'react-router-dom';
import SubTitulo from '../SubTitulo/SubTitulo';
import Footer from '../Footer/Footer'

function Cart() {
 

const { cartList, borrarCarro, sumaTotal, deleteItem} = useContext(CartContext)

if (sumaTotal() === 0) {
  return <p class="text-center">El carrito se encuentra vacio :( has click en <Button ><Link className="linkQuc" to="/" > Quilmes Urban Clothes</Link></Button> para regresar  </p>
}
    return (
        
        <div>
<SubTitulo />
<table class=" table container">
<thead>
                <tr >
                    <th class="marginTh w-25" > Foto </th>
                    <th class="marginTh w-25">Nombre</th>
                    <th class="marginTh w-25">Precio Unitario</th>
                    <th class="marginTh w-25">Cantidad</th>
                    <th class="marginTh w-25">Subtotal</th>
                    
                </tr>
   </thead>
</table>

            { cartList.map(prod => <div key= {prod.id} > 
                <table class="table container" >
            
            
               
            <tbody >
                
                    <td class="marginCarts w-25" > <Card.Img variant="top" src= {prod.foto} className="imagenCart" /> </td>
                    <td class="marginCarts w-25" > {prod.name} </td>
                    <td class="marginCarts w-25" > {prod.price} </td>
                    <td class="marginCarts w-25" > {prod.cantidad}x</td>
                    <Button onClick={() => deleteItem(prod.id)}  >X</Button>
                    <td class="marginCarts w-25" >  ${prod.price.replace("$", " ")*prod.cantidad} </td>
                    
            </tbody>
            
        </table>
       
       
             </div>) 
             
           
             }
            
             <p class="text-center"> TOTAL A PAGAR: ${sumaTotal()}  </p>
             <Button onClick={() => borrarCarro(cartList)}> Vaciar carro </Button>
             <Footer />
        </div>

    )
}

export default Cart
