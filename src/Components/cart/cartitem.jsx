import React from 'react';
import './cart.css'
import img from '../../assets/products/home1.jpg'
import add from '../../assets/icons/cartimg_32.png'
import cancel from '../../assets/icons/icons8_Close_32.png'
import minus from '../../assets/icons/minus_32.png'
import { cartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Cartitem = (props) => {
    const { addtoCart, removetoCart,canceltoCart, cart, totallcarts } = useContext(cartContext)
    const [tprice,settprice]=useState(0);
   
    return (
        <div className="cart-items">
            {/* -------------left--------------- */}
            <div className="cart-left">
                <div className="cart-product-img">
                    <img src={props.data.img} />
                </div>
                <div className="cart-product-detail">
                    <div className="cart-product-name">{props.data.name}</div>
                    <div className="cart-product-price">
                        <span>{props.data.price} * {cart[props.data.id]}</span>
                        <span>${(props.data.price)*cart[props.data.id]}</span>
                    </div>
                </div>
            </div>
            {/* -------------right------------- */}
            <div className="cart-right">
                <div className="cancel-botton">
                    <button onClick={()=>canceltoCart(props.data.id)} className='c-btn bright'><img className='c-btn-img' src={cancel} /></button>
                </div>
                <div className="carts-botton">
                    <button onClick={()=>addtoCart(props.data.id)} className='c-btn bright'><img className='c-btn-img' src={add} /></button>
                    <button onClick={()=>removetoCart(props.data.id)} className='c-btn bright'><img className='c-btn-img' src={minus} /></button>
                </div>
            </div>
        </div>
    )
}

export default Cartitem