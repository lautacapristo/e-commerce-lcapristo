import React from 'react'
// import { task } from '../../ayuda/task'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import SubTitle from '../SubTitle/SubTitle'


import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {

const [products, setProducts ] = useState([])
const {idCate} = useParams()

    useEffect(()=> {
    
        const db = getFirestore()
const queryCollection = idCate ?
query(    query(collection(db,'items'), where('categoria', '==', idCate )))
:
query(    query(collection(db, 'items')  ))
        
    
        getDocs(queryCollection) 
        .then(resp => setProducts(  resp.docs.map(prod =>({ id: prod.id, ...prod.data()})  ) ))
        .catch(err => console.log(err))


}, [idCate])



return (
    <div className="row back">

        <SubTitle />

        <ItemList products = { products } /> 
        
        <Footer />
    </div>
)
} 





 export default ItemListContainer