import { useState } from "react";
import Restaurants from "./Restaurants"
//Data Component
const listObj =[
    {
        data:{
            "id":17381273,
            "name":"Burger King",
            "rating":4,
            "duration":30,
            "cuisine":["Burger","FrenchFries","pasta"],
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREj4DxOqKpRE6xq3SjofilczXo-B63oGzg6w&s"
        }
    },
    {
        data:{
            "id":17381267,
            "name":"Vasista SriLakshmi",
            "rating":4.3,
            "duration":20,
            "cuisine":["Tiffins","Biryani","Curries"],
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/1280px-%22Hyderabadi_Dum_Biryani%22.jpg"
        }
    },
    {
        data:{
            "id":26383746,
            "name":"Mehafil",
            "rating":3.9,
            "duration":45,
            "cuisine":["Tiffins","Biryani","Curries"],
            "img":"https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/16:9/w_960,c_limit/biryani%20in%20hyderabad.jpg"
        }
    },
    {
        data:{
            "id":98776236,
            "name":"Ananya food Court",
            "rating":4.2,
            "duration":50,
            "cuisine":["Noodles","Fried Rice","Manchuria"],
            "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkRvZBpO_j_JTq8Ktw44yrQUI0gUsXrEw7A&s"
        }
    },
    {
        data:{
            "id":523095869,
            "name":"Cream Stone",
            "rating":4.4,
            "duration":20,
            "cuisine":["ThickShakes","Scoops","Jars"],
            "img":"https://www.creamstoneconcepts.com/images/banner.jpg"
        }
    }
];
const Body = () => {
    const [RestaurantsListObj,setRestaurantsListObj] = useState(listObj);
    return(
        <div className="content">
            <div className="top-bar">
                <button className="filter-restaurants" onClick={()=>{
                        const tempArray = RestaurantsListObj.filter((restaurant)=>(
                            restaurant.data.rating > 4
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
                        <Restaurants key={restaurant.data.id} resObj={restaurant}/>
                    ))
                    }
            </div>
        </div>
    );
}

export default Body;