import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';
import { memo } from 'react'

const ItemList = memo(
    ({products}) => {
        return (
            <>
            { products.map((prod) =>  <li key= {prod.id} className="col-lg-4 quitarPuntos"><Item prod = {prod} /></li>  )  }   
            </>
            ) 
        }
)


export default ItemList