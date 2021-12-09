import React from 'react'
import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'






// const task = new Promise((res, rej) => {

// res('200 ok')

// })



const ItemListContainer = () => {
    
      const [bool, setBool] = useState()
   const [productos, setProductos ] = useState([])
   

useEffect(()=> {
    task 
    .then(res => setProductos(res))
    .catch(err => console.log(err))
   
}, [])

      function handler() {
          setBool(!bool)
  }
 
(console.log(productos))

 return (
        <div>

            <ItemList productos = { productos } /> 
            <button onClick={handler}> no lo puedo borrar </button>
           
            
          
        </div>
    )
}

    // task
    // .then(dataRes => {
    //     return 1 
    
    // } )
    // .catch(err => console.log(err))
    // .then(res => console.log(res))
    // .finally(() => console.log("si o si al ultimo"))


 




export default ItemListContainer
