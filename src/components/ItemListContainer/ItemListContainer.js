import React from 'react'
// import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import './ItemListContainer.css';
 import { useParams } from 'react-router-dom'
 import SubTitulo from '../SubTitulo/SubTitulo'


 import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'

 const ItemListContainer = () => {


    
    //   const [bool, setBool] = useState()
   const [productos, setProductos ] = useState([])
   
//  const [producto, setProducto] = useState([])
   const {idCate} = useParams()
   


     useEffect(()=> {
    
     const db = getFirestore()
         if(idCate) {
    const queryCollection = query(collection(db, 'items'), where('categoria', '==', idCate ))
     getDocs(queryCollection) 
     .then(resp => setProductos(  resp.docs.map(prod =>({ id: prod.id, ...prod.data()})  ) ))
     .catch(err => console.log(err))
     
 } else {
     const queryCollection = collection(db, 'items')
     getDocs(queryCollection)
    .then(resp => setProductos(  resp.docs.map( prod => ({id: prod.id, ...prod.data()}))   ))
    .catch(err => console.log(err))
 }
     }, [idCate])
     console.log(productos);

 
   
// console.log(productos);
return (
    <div className="row back">

        <SubTitulo />
        <ItemList productos = { productos } /> 
        {/* <button onClick={handler}> </button>
        */}
        
      <Footer />
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