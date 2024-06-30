import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../CartItem/CartItem';
import menuItems from '../../data/menuitems.json'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Cart = () => {

    const {id} = useParams();

    const {cartQuantity, cartIsOpen, setCartIsOpen, cartItems} = useShoppingCart();

    const [tableNum, setTableNum] = useState();

    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        setTotalPrice(()=> 
            cartItems.reduce((total, cartItem) => {
                const item = menuItems.find(i=> i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
            }, 0)
        )
    }, [])
    

    const submitOrder = async(e)=>{
        e.preventDefault();

        console.log(cartItems, totalPrice, tableNum, id)

        if(cartItems, totalPrice, tableNum){
            
            try{
                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submitorder`, {id, cartItems, totalPrice, tableNum})
        
                const axiosdata = data.data
                // console.log('/a/a/a',axiosdata);
        
                    if(!axiosdata){
                    // console.log('wrong id');
                    // seterror(true);
                    }
                    else{            
                    // const user = axiosdata.Username;
                        // setAuth({user});
                        // navigate(`/customerhome/${user}`);
                        
                    }                
                    
                }      
                catch(err){console.log(err);}
        }

    }

  return (
    
    <div className='CartSlider'>
        <div className='Cart'>

            <div>

                <div className='closeCartBtn' onClick={()=> setCartIsOpen(false)}>X</div>

                <div>
                    {cartItems&& cartItems.map((item, i) => (
                    <CartItem key={i} item={item}/>
                    ))
                    }
                </div>

            </div>

            <div className='PlaceOrderBtns'>

                <div>
                    Total ${totalPrice}
                </div>

                <div>
                    <div>Enter your table number:</div>
                    <input type="number" onChange={(e)=> setTableNum(e.target.value)} />
                </div>
                

                <button onClick={(e)=> submitOrder(e)}>
                    Place Order
                </button>
            </div>

        </div>
    </div>
  )
}

export default Cart