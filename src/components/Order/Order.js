import React from 'react'
import SubTitle from '../SubTitle/SubTitle'
import Footer from '../Footer/Footer'
import {  useState } from 'react'
import {  getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
function Order() {

    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", password:"", password1:"" 
    })
    const { cartList, borrarCarro, total} = useContext(CartContext)

    const generarOrden = (e) => {
        e.preventDefault()
        let orden = {};
    
        orden.date = Timestamp.fromDate(new Date() )
        orden.buyer = dataForm
        orden.total = total();
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price.replace("$", " ") * cartItem.cantidad;
            return {id, nombre, precio}
        })   
        const db = getFirestore()
        const ordenCollection = collection(db, 'orders')
        addDoc(ordenCollection, orden)
        .then (resp => setIdOrder(resp.id))
        .catch (err => console.log(err))
        .finally(() => {
            borrarCarro()
            setDataForm({
                name:"", email:"", password:"", password1:""  
            })
        })
        
    }
    return (


        
        <div>
<SubTitle />

<form onSubmit = {generarOrden}>  <button>Generar orden </button>   </form>
 {idOrder.length !== 0 && idOrder}

<Footer />
        </div>
    )
}

export default Order