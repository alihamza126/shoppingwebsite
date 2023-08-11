import React, { useContext } from 'react'
import './cart.css'
import Head from '../header/Head'
import Searchbar from '../header/Searchbar'
import Topbar from '../topbar/Topbar'
import Cartitem from './cartitem'
import { cartContext } from '../Context/CartContext'
import { Allproducts } from '../../Products-Data/Products'
import { totalProducts } from '../../Products-Data/CartArry'

const Cart = () => {
    const { addtoCart, removetoCart, cart, totallcarts, totallCartPrice } = useContext(cartContext)
    return (
        <>
            <div>
                <Topbar />
                <Searchbar />
            </div>

            <div className="cart-container">
                <div className="cart-produts">
                    <div className="cart-heading">
                        <h1>Your Cart Products</h1>
                    </div>
                    {
                        totalProducts.map((pro, index) => {
                            if (cart[pro.id] > 0) {
                                return <Cartitem data={pro} key={index} />
                            }
                        })
                    }
                </div>
                <div className="cart-summary">
                    <div className="cart-heading cart-heading-s">
                        <h1>Products summary</h1>
                        <div className="cart-summary-price">
                            <h2 >Total Price</h2>
                            <h3>Rs : {totallCartPrice()}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart