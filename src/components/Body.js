import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { API_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName, loggedInUser } = useContext(UserContext);

  const PromotedRestaurant = withPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurantList(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1> Your Offline !! Please Check your Internet Connection Once ! ⚠ </h1>
    );

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-4 m-4 flex content-center">
        <div className="p-4 m-2 ">
          <input
            type="text"
            className="border border-solid  border-black text-center p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="m-2 ">
          <button
            className="px-4 py-2 m-4 bg-green-100  hover:bg-blue-50 rounded-lg"
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>

        <div className="p-4 m-2 ">
          <button
            className="px-4 py-2 bg-gray-100 hover:bg-blue-100 rounded-lg"
            onClick={() => {
              const filterdData = filteredRestaurant.filter(
                (res) => res.info.avgRating >= 4.4
              );

              setFilteredRestaurant(filterdData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="p-4 m-3 ">
          <lable>User:  </lable>
          <input
            type="text"
            className="border border-solid  border-black text-center p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRatingString <= 4.2 ? (
              <PromotedRestaurant resdata={restaurant} />
            ) : (
              <RestaurantCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
