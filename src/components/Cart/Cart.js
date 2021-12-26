import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card } from 'react-bootstrap'
import './Cart.css';

function Cart() {
 

const { cartList, borrarCarro} = useContext(CartContext)
console.log(borrarCarro)
    return (
        <div>

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
                    <td class="marginCarts w-25" >  {prod.price.replace("$", " ")*prod.cantidad} </td>
            </tbody>
        </table>
       
             </div>) 
           
             }
        </div>

    )
}

export default Cart
