import { useState, useContext } from "react";
import { useShoppingCartContext } from "../ShoppingCartContext";
const ITEM_IMAGE = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const Item = ({item}) =>{
    const [itemData, setItemData] = useState(item);
    const {id, name, price, imageId, ratings, description} = itemData;
    const {rating, ratingCountV2} = ratings.aggregatedRating;
    const { cartItems, addToCart, removeItem } = useShoppingCartContext();

    return(
        <div className="item-details">
            <div className="item-container">
                <ul>
                    <li className="item-name">{name}</li>
                    <li className="item-price">{price/100}</li>
                    <li className="item-rating">{rating}+{ratingCountV2}</li>
                    <li className="item-description">{description}</li>
                </ul>
            </div>
            <span className="item-image">
                <img src={ITEM_IMAGE + imageId}/>
                {item.quantity ? <span className="quantity">
                    <button 
                        className="btn-quantity"
                        onClick={()=>{
                            removeItem(itemData);
                        }}
                    > - </button>
                    <h5>  {item.quantity} </h5>
                    <button 
                        className="btn-quantity"
                        onClick={()=>{
                            addToCart(itemData);
                        }}
                    > + </button>
                </span> : <button 
                        className="add-to-cart"
                        onClick={()=>{
                            addToCart(itemData);
                        }}
                    > ADD </button>}
            </span>

        </div>
    )
}

export default Item;