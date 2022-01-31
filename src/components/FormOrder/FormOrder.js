import React from 'react'
import { CartContext } from '../../Context/CartContext'
import {  getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useState } from 'react'
import './FormOrder.css';

function FormOrder() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", lastname:"", email:"", email2:""
    })
    const { cartList, borrarCarro, total} = useContext(CartContext)

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
        }
    
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
                    name:"", lastname:"", email:"", email2:""
                })
            })
            
        }

        if (dataForm.email === dataForm.email2 && 
            dataForm.email.length > 12 &&
            cartList !== 0) {
            
            return ( 
<div>
    <form onSubmit = {generarOrden} onChange={handleChange}> 
        <label> Nombre </label>
            <input className="col-lg-12 my-3" type="text" name="name" placeholder="Ingresar Nombre" value={dataForm.name} required />
            <label> Apellido </label>
            <input className="col-lg-12 my-3" type="text" name="lastname" placeholder="Ingresar Apellido" value={dataForm.lastname} required />
            <label>E-mail</label>
            <input className="col-lg-12 my-3" type="text" name="email" placeholder="email" value={dataForm.email} />
            <label>Repetir E-Mail</label>
            <input className="col-lg-12 my-3" type="text" name="email2" placeholder="Repetir mail asignado para asegurarse no tener errores" value={dataForm.email2} />
                <button className="my-3"  >Generar orden </button>   
                <p className=" idFormOrd"> El id de su compra es:   {idOrder.length !== 0 && idOrder }  </p>  
    </form>
</div>
                    )           
        }

    return (
<div>
    <form onSubmit = {generarOrden} onChange={handleChange}> 
        <label> Nombre </label>
            <input className="col-lg-12 my-3" type="text" name="name" placeholder="Ingresar Nombre" value={dataForm.name} required/>
            <label> Apellido </label>
            <input className="col-lg-12 my-3" type="text" name="lastname" placeholder="Ingresar Apellido" value={dataForm.lastname} required />
            <label>E-mail</label>
            <input className="col-lg-12 my-3" type="text" name="email" placeholder="email" value={dataForm.email} />
            <label>Repetir E-Mail</label>
            <input className="col-lg-12 my-3" type="text" name="email2" placeholder="Repetir mail asignado para asegurarse no tener errores" value={dataForm.email2} />
                <button className="my-3" disabled  >Generar orden </button>               
                <p className=" idFormOrd" > El id de su compra es: {idOrder.length !== 0 && idOrder }  </p> 
    </form>
</div>
    )
}

export default FormOrder