import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import './CartWidget.css'
 import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function CartWidget() {
  const { countDinamic, cartList } = useContext(CartContext)

  console.log(countDinamic)
    return (
      <Container >
        <Link to="/cart"className="row" >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2 col-lg-6 cartSvg" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
<p className="col-lg-6 numberCart" > {countDinamic(cartList)} </p>
        </Link>
        
        </Container>
    )
}

export default CartWidget
