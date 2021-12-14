import React from 'react';
import Item from '../../Item/Item';
import './ItemList.css';


function ItemList({productos}) {
    return (
     <>
     { productos.map((prod) =>  <li key= {prod.id} className="col-lg-4 quitarPuntos"><Item prod = {prod} /></li>  )  }   
        
</>

    )
}

export default ItemList