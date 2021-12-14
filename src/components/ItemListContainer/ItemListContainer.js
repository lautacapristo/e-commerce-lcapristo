import React from 'react'
import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';
 import { useParams  } from 'react-router-dom'


const ItemListContainer = () => {
    
    //   const [bool, setBool] = useState()
   const [productos, setProductos ] = useState([])
 
   const {idCate} = useParams()
   

useEffect(()=> {
    task 
    .then(res => setProductos(res))
    .catch(err => console.log(err))
   
}, [])

return (
    <div className="row back">

        <ItemList productos = { productos } /> 
        {/* <button onClick={handler}> </button>
        */}
        
      
    </div>
)
}

//       function handler() {
//           setBool(!bool)
//   }
 



    // task
    // .then(dataRes => {
    //     return 1 
    
    // } )
    // .catch(err => console.log(err))
    // .then(res => console.log(res))
    // .finally(() => console.log("si o si al ultimo"))


 




export default ItemListContainer
