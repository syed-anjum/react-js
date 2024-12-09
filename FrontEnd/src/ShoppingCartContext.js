import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext({
    items:[],
    cart:[],
    addToCart:(product) => {},
    removeItem: (product) => {},
 });

export function CartProvider({children}){
    const[cartItems, setCartItems] = useState([]);

    /**
     * @description : Storing cartItems in local storage
     */
    useEffect(()=>{
        console.log("localStorageUodated");
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(cartItems);
    },[cartItems]);

    /**
     * 
     * @param {*} product 
     * @description : Adding items to cart
     */
    const addToCart = (product) =>{
        console.log("addToCart");
        let itemIsInCart = cartItems.find((item)=> item.id == product.id);
        if(itemIsInCart){
            setCartItems((cartItem)=>(
                cartItem.map((item)=>{
                    return item.id == product.id ? {...item, quantity:item.quantity + 1}: item;
                })
            ));
        }else{
            setCartItems([...cartItems, {...product, quantity :1}]);
        }
    }

    /**
     * 
     * @param {*} product 
     * @description : Removing items from the cart
     */
    const removeItem = (product) =>{
        let cartItem = cartItems.find((item)=> item.id == product.id);
        if(cartItem.quantity == 1){
            setCartItems((prevoius) =>(
                prevoius.filter((item)=> item.id !== product.id)
            ))
        }else{
            setCartItems((prevoius) =>(
                prevoius.map((item)=>{
                    return item.id == product.id ? {...item, quantity:item.quantity-1} : item;
                })
            ))
        }
    }
    /**
     * 
     * @description : making cart Empty
     */
    const clearCart = () => {
        setCartItems([]);
    }

    /**
     * 
     * @description : Calculating total price of the cart items
     */
    const getCartTotal = () => {
        return cartItems.reduce((acc, curr)=>{
            return acc+ (curr.price * curr.quantity);
        },0)
    }

    return(
        <ShoppingCartContext.Provider
            value = {{
                cartItems,
                addToCart,
                removeItem,
                clearCart,
                getCartTotal,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export function useShoppingCartContext(){
    return useContext(ShoppingCartContext);
}