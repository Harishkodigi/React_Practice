import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";


const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

   

    useEffect(() => {
        fetchData();
    },[]);

  
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setRestaurantList(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (restaurantList.length === 0)? (
        <Shimmer />) : (
        <div className="body" >
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                    <button className="search-btn " onClick={() => {
                        const filteredRestaurant = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant)
                    }}>search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filterdData = filteredRestaurant.filter((res) => res.info.avgRating >= 4.4);

                        setFilteredRestaurant(filterdData)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container" >
                {filteredRestaurant.map((restaurant) =>
                    (<RestaurantCard key={restaurant.info.id} resdata={restaurant} />))}

            </div>
        </div>
    )
}

export default Body;