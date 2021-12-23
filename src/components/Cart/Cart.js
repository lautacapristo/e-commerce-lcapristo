import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Cart() {

const { cartList, borrarCarro} = useContext(CartContext)
console.log(borrarCarro)
    return (
        <div>
            { cartList.map(prod => <li> {prod.name} {prod.cantidad} </li>) 
            }
        </div>
    )
}

export default Cart
