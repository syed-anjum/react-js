import { useState } from "react"
import Item from "./components/Item";
import { useShoppingCartContext } from "./ShoppingCartContext";

const Cart = () =>{
    let data = JSON.parse(localStorage.getItem("cartItems"));
    const { cartItems, addToCart, removeItem } = useShoppingCartContext();
    return(
        <div className="body">
            {
                cartItems && cartItems.map((item)=>{
                   return <Item item={item}/>
                })
            }
        </div>
    )
}

export default Cart;