import React from 'react'
import Item from '../../Item/Item'



function ItemList({productos}) {
    return (
     <>
     { productos.map((prod) =>  <li key= {prod.id}><Item prod = {prod} /></li>  )  }   
        
</>

    )
}

export default ItemList