import React from 'react'
import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'

// const task = new Promise((res, rej) => {

// res('200 ok')

// })



const ItemListContainer = () => {
    
    const [bool, setBool ] = useState(true)
   const [producto, setProducto ] = useState([])

useEffect(()=> {
    task 
    .then(res => setProducto(res))
}, [])

   function handler() {
       setBool(!bool)
}
task 
.then(res => setProducto(res))
console.log(producto);
 return (
        <div>
            <h4> sd </h4>
        <button onClick={handler}>clickito.  </button>
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
