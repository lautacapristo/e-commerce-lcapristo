import {createContext, useState} from 'react'
import React from 'react'

export const CartContext = createContext([])

function CartContextProvider({children}) {

const [cartList, setCartList] = useState([])

  // function agregarAlCarrito (item) {
  //   setCartList([...cartList, item])
 // }

// function borrarCarro() {
//     setCartList([])
// }

function  agregarAlCarrito(item)  {

const index = cartList.findIndex(i => i.id === item.id)

if (index > -1) {
    const oldItem = cartList[index].cantidad

    cartList.splice(index, 1)
    setCartList([...cartList, { ...item, cantidad: item.cantidad + oldItem}])
} else
setCartList([...cartList, item])
}




    return (
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito
            // borrarCarro,
        }} > 
{children}
        </CartContext.Provider>
    )
}
 

export default CartContextProvider