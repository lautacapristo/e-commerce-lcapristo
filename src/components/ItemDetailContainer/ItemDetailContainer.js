import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {  getFirestore, doc, getDoc } from 'firebase/firestore'
import SubTitle from '../SubTitle/SubTitle'
import './ItemDetailContainer.css';

function ItemDetailContainer() {
    
    const [products, setProducts ] = useState({})
    
    const {ids} = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        
const objetoDb = doc(db, 'items', ids)
    getDoc(objetoDb) 
    .then(res => setProducts({ id: res.id, ...res.data() }))
    .catch(err => console.log(err))
        
    }, [ids])
    
    
    return (
        <div className="row back"> 
            <SubTitle />
            <ItemDetail products = {products}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer
