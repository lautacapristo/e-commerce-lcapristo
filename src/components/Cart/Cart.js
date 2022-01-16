import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button } from 'react-bootstrap'
import './Cart.css';
import { Link } from 'react-router-dom';
import SubTitle from '../SubTitle/SubTitle';
import Footer from '../Footer/Footer'
import {  getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'



function Cart() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", tel:""
    })
    const { cartList, borrarCarro, sumaTotal, deleteItem} = useContext(CartContext)
    
    const handleChange = (e) => {
 setDataForm({
     ...dataForm,
     [e.target.name]: e.target.value
 })
    }

    console.log(dataForm);
    
    const generarOrden = (e) => {
    e.preventDefault()
    let orden = {};

    orden.date = Timestamp.fromDate(new Date() )
    orden.buyer = dataForm
    orden.total = sumaTotal();
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
            name:"", email:"", tel:""  
        })
    })
    
    


    //     const coleccionNoti = collection(db, 'items')
    //     const querryActualizarStock = query(
    //         coleccionNoti, where (document.id(), 'in', cartList.map(it => it.id) )
    //     )
    //     const batch = writeBatch(db)
    //  getDocs(querryActualizarStock)
    //  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
    //     stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
    //  })))
    //  batch.commit()
    }


if (sumaTotal() === 0) {
  return <p class="text-center">El carrito se encuentra vacio :( has click en <Button ><Link className="linkQuc" to="/" > Quilmes Urban Clothes</Link></Button> para regresar  </p>
}


    return (
        
        <div>

       
 <SubTitle />
<table class=" table container">
<thead>
                <tr >
                    <th class="marginTh w-25" > Foto </th>
                    <th class="marginTh w-25">Nombre</th>
                    <th class="marginTh w-25">Precio Unitario</th>
                    <th class="marginTh w-25">Cantidad</th>
                    <th class="marginTh w-25">Subtotal</th>
                    
                </tr>
   </thead>
</table>

            { cartList.map(prod => <div key= {prod.id} > 
                <table class="table container" >
            
            
               
            <tbody >
                
                    <td class="marginCarts w-25" > <Card.Img variant="top" src= {prod.foto} className="imagenCart" /> </td>
                    <td class="marginCarts w-25" > {prod.name} </td>
                    <td class="marginCarts w-25" > {prod.price} </td>
                    <td class="marginCarts w-25" > {prod.cantidad}x</td>
                    <Button onClick={() => deleteItem(prod.id)}  >X</Button>
                    <td class="marginCarts w-25" >  ${prod.price.replace("$", " ")*prod.cantidad} </td>
                    
            </tbody>
            
        </table>
       
       
             </div>) 
             
           
             }
            
             <p class="text-center"> TOTAL A PAGAR: ${sumaTotal()}  </p>
             <Button onClick={() => borrarCarro(cartList)}> Vaciar carro </Button>
            
            <form onSubmit = {generarOrden} onChange={handleChange} className="container"> 

            <input className="col-lg-12 my-3" type="text" name="name" placeholder="name" value={dataForm.name} />
            <input className="col-lg-12 my-3" type="text" name="phone" placeholder="phone" value={dataForm.phone} />
            <input className="col-lg-12 my-3" type="email" name="email" placeholder="email" value={dataForm.email} />

            <button>Generar orden </button>
             </form>
              {idOrder.length !== 0 && idOrder}
             <Footer /> 
        </div>

    )
}

export default Cart
