import { RESTUARANT_IMAGE } from "../utils/constant";
//restaurantsDetails Component
const Restaurants = (props) =>{
    const {resObj } = props;
    const{ name, avgRating, sla, cuisines, cloudinaryImageId} = resObj;
    return(
        <div className="list">
            <ul>
                <img className="image" src={RESTUARANT_IMAGE + cloudinaryImageId}/>
                    <li>{name}</li>
                    <li>{avgRating} Rating</li>
                    <li>{sla?.slaString}</li>
                {/* <div>
                    {cuisines.join(",")}
                </div> */}
            </ul>
        </div>
    );
}

export default Restaurants;