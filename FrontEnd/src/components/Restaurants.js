import { Link } from "react-router-dom";
import { RESTUARANT_IMAGE } from "../utils/constant";
//restaurantsDetails Component
const Restaurants = (props) =>{
    const {resObj } = props;
    const{ id, name, avgRating, sla, cuisines, cloudinaryImageId} = resObj;
    return(
        <div className="list">
            <ul className="card-content">
                <Link to={"/menu/"+id} ><img className="image" src={RESTUARANT_IMAGE + cloudinaryImageId}/></Link>
                <li>{name}</li>
                <li>
                <div class="rating">
                    <span class="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    </span>
                    <span class="rating-text">{avgRating}</span>
                    <span class="duration"> • {sla?.slaString}</span>
                </div>
                </li>
                <li className="cuisines-list">
                    {cuisines.join(",")}
                </li>
            </ul>
        </div>
    );
}

export default Restaurants;