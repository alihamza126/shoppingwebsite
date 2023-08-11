import { createContext, useReducer, useState } from "react";
import { Allproducts } from "../../Products-Data/Products";
import { totalProducts } from "../../Products-Data/CartArry";

export const cartContext = createContext();
let totallcarts = 0;

export const CartContextProvider = (props) => {

    const defaultcart = () => {
        let cart = {}
        for (let i = 0; i < totalProducts.length; i++) {
            cart[i + 1] = 0;
        }
        return cart
    }
    const addtoCart = (id) => {
        setcart((prev) => {
            return ({ ...prev, [id]: prev[id] + 1 })
        })
        totallcarts++;
        console.log(cart)
    }
    const removetoCart = (id) => {
        setcart((prev) => {
            return ({ ...prev, [id]: prev[id] - 1 })
        })
        totallcarts--;
    }
    const canceltoCart = (id) => {
        setcart((prev) => {
            return ({ ...prev, [id]: 0 })
        })
        totallcarts--;
    }
    const totallCartPrice = () => {
        let totalAmount=0;
        for (const item in cart) {
           if(cart[item]>0){
            let iteminfo=totalProducts.find((pro)=>pro.id===Number(item));
            totalAmount+=cart[item]*iteminfo.price;
           }
        }
        return totalAmount;
    }

    const [cart, setcart] = useState(defaultcart);
    const [cartitems, setcartitems] = useState(0);
    const [cartprice, setcartprice] = useState(0);
    const values = { addtoCart, removetoCart, canceltoCart,totallCartPrice, cart, totallcarts }

    return (
        <cartContext.Provider value={values}>
            {props.children}
        </cartContext.Provider>
    )
}