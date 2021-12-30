import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
// import { task } from '../../ayuda/task'
import ItemDetail from '../ItemDetail/ItemDetail'
 import {  getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {
    
    const [producto, setProducto ] = useState({})
    
    const {ids} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        
 const objetoDb = doc(db, 'items', ids)
 getDoc(objetoDb) 
 .then(res => setProducto({ id: res.id, ...res.data() }))
 .catch(err => console.log(err))
        // task 
        // .then(res => setProductos(res.find(prod => prod.id === parseInt(ids))))
        // .catch(err => console.log(err))
        
    }, [ids])
    
    
    return (
        <div> 
            <ItemDetail productos = {producto}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer
// import React from 'react'
// import  promiseDetail  from '../../ayuda/promiseDetail'
// import { useState, useEffect } from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail'

// function ItemDetailContainer() {
// const [promise, setPromise] = useState({});

//     useEffect(()=> {
//         promiseDetail 
//         .then(res => setPromise(res.find((producto) => producto.name === "remera")))
//         .catch(err => console.log(err))
       
       
//     }, [])
//     console.log(promise)
//     return (
//         <div key= {promise.name}>
//             <ItemDetail promise= {promise} />
//         </div>
//     )
// }

// export default ItemDetailContainer
