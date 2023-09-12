import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [restaurantList, setRestaurantList] = useState(resData);

    return (
        <div className="body" >
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filterdData = resData.filter((res) => res.info.avgRating > 4.5);

                        setRestaurantList(filterdData)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container" >
                {restaurantList.map((restaurant) =>
                    (<RestaurantCard key={restaurant.info.id} resdata={restaurant} />))}

            </div>
        </div>
    )
}

export default Body;