import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button, Table, ButtonGroup } from 'react-bootstrap'
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
    const { cartList, borrarCarro, total, deleteItem, alert} = useContext(CartContext)
    
    
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


if (total() === 0) {
 
    return (
     
      <div className="row carritoFondo">
      <SubTitle />
{alert()}
 
 

  <p className="text-center aviso col-lg-12">No hay productos en el carrito <Button variant="link" className="col-lg-12 w-75" ><Link className="linkQuc" to="/" > <em> Volver a la tienda </em> </Link></Button>  </p>
 
<Footer /> 
  </div>
  )}

    return (
        
        <div className="carritoFondo row">
       
 <SubTitle />
 { cartList.map(prod => <div key= {prod.id} className="col-lg-12 itemscard" > 

  <Card className="cartStyle w-75">
    <Card.Img variant="top" src= {`${prod.photo}`} className="cartFoto" />
    <Card.Body className="card-body">
    <Card.Title  className="text-center c--white borderCard">{`${prod.name}`} </Card.Title>
    <Card.Text className="text-center c--white">
    Precio: {`${prod.price}`}
    </Card.Text>
    <Card.Text className="text-center c--white">
    Subtotal: {`$${prod.price.replace("$", " ")*prod.cantidad}`}
    </Card.Text>
    <Card.Text className="text-center c--white">
   Cantidad de productos: {`${prod.cantidad}`}
    </Card.Text>
    <Button variant="light" size="lg" className="w-100 " onClick={() => deleteItem(prod.id)}>
    Eliminar producto 
  </Button>
    </Card.Body>
    </Card>
 </div> 
 )}
 
 
             {/* <p className="text-center totalPago"> TOTAL A PAGAR: ${total()}  </p> */}
             
            <Button variant="dark" className="mt-4 buttonsCart" > <Link to="/cart/Form"> Finalizar compra</Link>  </Button>
             <Button variant="light "className="buttonsCart"  onClick={() => borrarCarro(cartList)}> Vaciar carro </Button>
             
           
            {/* <form onSubmit = {generarOrden} onChange={handleChange} className="container"> 

            <input className="col-lg-12 my-3" type="text" name="name" placeholder="name" value={dataForm.name} />
            <input className="col-lg-12 my-3" type="text" name="phone" placeholder="phone" value={dataForm.phone} />
            <input className="col-lg-12 my-3" type="email" name="email" placeholder="email" value={dataForm.email} />

            <button>Generar orden </button>
             </form>
              {idOrder.length !== 0 && idOrder} */}
             <Footer /> 
        </div>

    )
}

export default Cart
