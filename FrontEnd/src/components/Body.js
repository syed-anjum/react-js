import { useEffect, useState } from "react";
import Restaurants from "./Restaurants";

//Data Component
const Body = () => { 
    const [RestaurantsListObj,setRestaurantsListObj] = useState([]);

    const fetchData = async () =>{
        try{
            let data = await fetch("http://localhost:3000/swiggy/restaurant");
            data = await data.json();
            data = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRestaurantsListObj(data);
        }catch(erro){
            console.log(error);
        }
        
        // let data1 = await fetch("http://localhost:3000/swiggy/getMorerestaurant");
        // data1 = await data1.json();
        // console.log(data1);
        // data1 = data1.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        // let tempRestArra = [...data, ...data1, ...data, ...data1];
        // setRestaurantsListObj(tempRestArra);       
    };
    
    useEffect(()=>{  
        fetchData();
    },[]);

    if(RestaurantsListObj?.length == 0){
        return (
            <h1>Loading</h1>
        )
    }
    return(
        <div className="content">
            <div className="top-bar">
                <button className="filter-restaurants" onClick={()=>{
                        const tempArray = RestaurantsListObj.filter((restaurant)=>(
                            restaurant.info.avgRating > 4
                        )
                    );
                    setRestaurantsListObj(tempArray);
                }
                }>Filter Top Restaurants</button>
            </div>
            <div className="display-list">
                {
                    RestaurantsListObj.map((restaurant) =>(
                        //  console.log(restaurant),
                        <Restaurants key={restaurant.info.id} resObj={restaurant.info}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;