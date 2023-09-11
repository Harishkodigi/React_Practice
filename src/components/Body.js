import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";


const Body = () => {
    return (
        <div className="body" >
            <div className="search">search</div>
            <div className="res-container" >
                {resData.map((restaurant) =>
                    (<RestaurantCard key={restaurant.info.id} resdata={restaurant} />))}

            </div>
        </div>
    )
}

export default Body;