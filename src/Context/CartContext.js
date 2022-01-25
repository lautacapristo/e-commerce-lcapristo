import {createContext, useState} from 'react'
import React from 'react'





export const CartContext = createContext([])

function CartContextProvider({children}) {

const [cartList, setCartList] = useState([])

  // function agregarAlCarrito (item) {
  //   setCartList([...cartList, item])
 // }d

 function borrarCarro() {
     setCartList([])
 }

function  agregarAlCarrito(item)  {

const index = cartList.findIndex(i => i.id === item.id)

if (index > -1) {
    const oldItem = cartList[index].cantidad

    cartList.splice(index, 1)
    setCartList([...cartList, { ...item, cantidad: item.cantidad + oldItem}])
} else
setCartList([...cartList, item])
}

const alert = () => {
    const Swal = require('sweetalert2')
    Swal.fire('El carrito se encuentra vacio. Vuelva al inicio para agregar productos!')
    
}

const alertForm = () => {
    
    const Swal = require('sweetalert2')
    Swal.fire('Ups! Las contraseñas o E-mail no coinciden')
}

const total = () => {
  let count = 0
  cartList.forEach((prod) => {
      count += prod.cantidad * prod.price.replace("$", " ")
  })
  return count
};

const deleteItem = (id) => {
    setCartList(cartList.filter((producto) => producto.id !== id));
}

const countDinamic = () => {
    let count = 0;
    
    cartList.forEach((prod) => {
        count += Number(prod.cantidad)
    })
    
    if(count === 0) {
        count = !NaN;
    }
    

    

    return count;
    

}


    return (
        <CartContext.Provider value = {{
            cartList,
            agregarAlCarrito,
            total,
            deleteItem,
             borrarCarro,
             countDinamic,
             alert,
             alertForm
            
        }} > 
{children}
        </CartContext.Provider>
    )
}
 

export default CartContextProvider