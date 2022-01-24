import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import './Form.css';
import { Button } from 'react-bootstrap';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer';
import Form from 'react-bootstrap/Form';
import {  getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'

function Forms() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", password:"", password1:"" 
    })

    const { cartList, borrarCarro, total, alertForm} = useContext(CartContext)

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
                    name:"", email:"", password:"", password1:""  
                })
            })
            
        }

if (dataForm.password === dataForm.password1) {
    return (


        <div className="forms row">
           
            <SubTitle />
            <form onSubmit = {generarOrden} onChange={handleChange}> 
        <label> Nombre </label>
            <input className="col-lg-12 my-3" type="text" name="name" placeholder="Nombre" value={dataForm.name} />
              <label>E-mail</label>
                <input className="col-lg-12 my-3" type="text" name="email" placeholder="email" value={dataForm.email} />
                <label>Contraseña</label>
               <input className="col-lg-12 my-3" type="password" name="password" placeholder="Ingresar contraseña" value={dataForm.password} />
               <label>Repetir contraseña</label>
               <input className="col-lg-12 my-3" type="password" name="password1" placeholder="" value={dataForm.password1} />
              
               <button className="my-3"  ><Link to="/cart/Form/order">Generar orden</Link> </button>
              
                </form>
                
           
    
    
    <Footer/>
        </div>
    )
    
    
}

return (


    <div className="forms row">
       
        <SubTitle />
        <form onSubmit = {generarOrden} onChange={handleChange}> 
    <label> Nombre </label>
        <input className="col-lg-12 my-3" type="text" name="name" placeholder="Nombre" value={dataForm.name} />
          <label>E-mail</label>
            <input className="col-lg-12 my-3" type="text" name="email" placeholder="email" value={dataForm.email} />
            <label>Contraseña</label>
           <input className="col-lg-12 my-3" type="password" name="password" placeholder="Ingresar contraseña" value={dataForm.password} />
           <label>Repetir contraseña</label>
           <input className="col-lg-12 my-3" type="password" name="password1" placeholder="" value={dataForm.password1} />
          
      <button className="my-3" onClick={() => alertForm()}  >Generar orden </button>
          
            </form>
            
       


<Footer/>
    </div>
)

}

export default Forms