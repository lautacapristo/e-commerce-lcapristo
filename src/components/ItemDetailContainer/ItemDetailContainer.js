import React from 'react'
import  promiseDetail  from '../../ayuda/promiseDetail'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
const [promise, setPromise] = useState([]);

    useEffect(()=> {
        promiseDetail 
        .then(res => setPromise(res.find((producto) => producto.id === 1)))
        .catch(err => console.log(err))
       
       
    }, [])
    console.log(promise)
    return (
        <div>
            <ItemDetail promise= {promise} />
        </div>
    )
}

export default ItemDetailContainer
