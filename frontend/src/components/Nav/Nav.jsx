import React from 'react'
import './Nav.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import Cart from '../Cart/Cart';
import useAuth from '../../hook/useAuth';
import {Link} from 'react-router-dom'

const Nav = () => {

    const {cartQuantity, cartIsOpen, setCartIsOpen} = useShoppingCart();
    const {auth, setAuth}= useAuth();


  return (
    <>
    <div className='Nav'>
        <div>Restaurant</div>

        {auth.user? 
            <div onClick={()=> setCartIsOpen(true)}>
                Cart
            </div>

        :

        <div><Link to={'/loginstaff'}>Staff Login</Link></div>
        }
        
        
        
    </div>

    {cartIsOpen? <Cart/> : <></>}
    </>
  )
}

export default Nav