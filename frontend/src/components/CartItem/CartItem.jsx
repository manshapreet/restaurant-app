import React from 'react'
import './CartItem.css'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import menuItems from '../../data/menuitems.json'

const CartItem = ({item}) => {

    const {removeFromCart} = useShoppingCart();
    const cartItem = menuItems.find(i => i.id === item.id)
    if(cartItem == null) return null

  return (
    <div className='CartItem'>
        <div className='cartItemImg'>
            <img src={cartItem.image} alt="" />
        </div>

        <div className='cartItemInfo'>
            <div>
                {cartItem.name}
            </div>
            <div>
                Qty: {item.quantity}
            </div>
            <div>
                $ {cartItem.price}
            </div>

            {/* <div>
                {quantity === 0 ? (
                    <button onClick={()=> increaseCartQuantity(item.id)}>+ Add to Cart</button>
                ): 
                    <div className='editCartQtyDiv'>
                        <button onClick={()=> decreaseCartQuantity(item.id)}>-</button>
                        <div className=''>
                            <div>{quantity}</div>
                            <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                        </div>
                        <button onClick={()=> increaseCartQuantity(item.id)}>+</button>
                    </div>
                }
            </div> */}
        </div>
    </div>
  )
}

export default CartItem