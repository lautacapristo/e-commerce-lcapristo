import React from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { BsFillCartFill } from "react-icons/bs";


function CartWidget() {
  const { countDinamic, cartList } = useContext(CartContext)

    return (

    <div className=" row svgCW">
        <Link to="/cart" className="col-lg-6 cartFill" >
        < BsFillCartFill />
        </Link>
        <p className="col-lg-5 cartDinamic" > {countDinamic(cartList)} </p>
    </div>
  
    )
}

export default CartWidget
