import { RES_URL } from "../utils/constant";
//restaurantsDetails Component
const Restaurants = (props) =>{
    const {resObj } = props;
    const{ name, rating, duration, cuisine, img} = resObj?.data;
    return(
        <div className="list">
            <ul>
                <img className="image" src={img}/>
                <li>{name}</li>
                <li>{rating} Rating</li>
                <li>{duration} mins</li>
                <li>{cuisine.join(",")}</li>
            </ul>
        </div>
    );
}

export default Restaurants;