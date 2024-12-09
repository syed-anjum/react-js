import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Item from "./Item";
import { useShoppingCartContext } from "../ShoppingCartContext";

const Menu = ()=>{
    const {id} = useParams();
    const [menuList, setMenuList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const { cartItems } = useShoppingCartContext();

    async function fetchData(){
        let data = await fetch(`http://localhost:3000/swiggy/restaurantMenu/${id}`);
        data = await data.json();
        data = data.data.cards[4].groupedCard.cardGroupMap['REGULAR'].cards;
        setMenuList(data);
    }

    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <div>
           {
            menuList.map((list,index)=>(
                list.card.card.itemCards && <div className="accordian-container">
                    <div className="accordian-header" onClick={()=>{
                            if(index == activeIndex) setActiveIndex(-1);
                            else setActiveIndex(index);
                        }}>
                        <span className="title">{list.card.card.title}</span>
                        <span className="accordian-symbol" >{activeIndex == index ? '-' : '+'}</span>
                    </div>
                    <div className="body">
                        {list.card.card.itemCards && list.card.card.itemCards.map((item)=>{
                          item  = item.card.info;
                          let isPresent = cartItems.find((cartItem) => cartItem.id == item.id);
                          if(isPresent) item = {...item, quantity:isPresent.quantity};
                           return activeIndex == index ? <Item item={item} activeIndex={activeIndex}/>: ""
                        })}
                    </div> 
                </div>
            ))
           }
        </div>
    );
}

export default Menu;