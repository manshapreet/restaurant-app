import React from 'react'
import './Nav.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import Cart from '../Cart/Cart';

const Nav = () => {

    const {cartQuantity, cartIsOpen, setCartIsOpen} = useShoppingCart();

  return (
    <>
    <div className='Nav'>
        <div>Restaurant</div>
        
        <div onClick={()=> setCartIsOpen(true)}>
            Cart
        </div>
    </div>

    {cartIsOpen? <Cart/> : <></>}
    </>
  )
}

export default Nav