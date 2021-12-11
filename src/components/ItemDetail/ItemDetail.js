import React from 'react'
import Item from '../../Item/Item'

function ItemDetail({promise}) {
    return (
        <>
            { promise.map((prod) =>  <li key= {prod.id}><Item prod = {prod} /></li>  )  }   
        </>
    )
}

export default ItemDetail
