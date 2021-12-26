import React from 'react';
import Item from '../../Item/Item';
import './ItemList.css';
import { memo } from 'react'

//memo()

const ItemList = memo(
    ({productos}) => {
        return (
            <>
            { productos.map((prod) =>  <li key= {prod.id} className="col-lg-4 quitarPuntos"><Item prod = {prod} /></li>  )  }   
               
       </>
       
           ) 
    }
)

// function ItemList({productos}) {
//     return (
//      <>
//      { productos.map((prod) =>  <li key= {prod.id} className="col-lg-4 quitarPuntos"><Item prod = {prod} /></li>  )  }   
        
// </>

//     )
// }

export default ItemList