import React from 'react'
import './MenuItem.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';

const MenuItem = ({item}) => {

    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

    const quantity = getItemQuantity(item.id);

  return (
    <div className='MenuItem'>
        <div className='menuItemImg'>
            <img src={item.image} alt="" />
        </div>

        <div className='menuItemInfo'>
            <div>
                {item.name}
            </div>
            <div>
                {item.description}
            </div>
            <div>
                {item.price}
            </div>

            <div>
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
            </div>
        </div>
        
    </div>
  )
}

export default MenuItem