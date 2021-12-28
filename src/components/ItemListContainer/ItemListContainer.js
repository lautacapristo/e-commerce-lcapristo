import React from 'react'
 import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css';
 import { useParams } from 'react-router-dom'

// import { collection, getFirestore, getDocs } from 'firebase/firestore'

 const ItemListContainer = () => {


    
    //   const [bool, setBool] = useState()
   const [productos, setProductos ] = useState([])
   
 console.log(productos)
   const {idCate} = useParams()
   

 useEffect(()=> {
 if(idCate) {
     task 
     .then(res => setProductos(res.filter(prod => prod.categoria === idCate)))
     .catch(err => console.log(err)) 
 } else {
     task 
     .then(res => setProductos(res))
     .catch(err => console.log(err)) 
 }  
 }, [idCate])
                       //  // useEffect(()=> {
    
//     const db = getFirestore()
//    const queryCollection = collection(db, 'items')
//    if(idCate) {
//     getDocs(queryCollection) 
//     .then(resp => setProductos(resp.filter(prod =>([ prod.categoria === idCate]))))
//     .catch(err => console.log(err))  
// } else {
//     getDocs(queryCollection)
//    .then(resp => setProductos(  resp.docs.map( prod => ({id: prod.id, ...prod.data()}))   ))
//    .catch(err => console.log(err))
// }
    // }, [idCate])

    
// console.log(productos);
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