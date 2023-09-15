import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";



const RestaurantMenu = () => {

   
    const { resId } = useParams();


    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    useEffect(() => {
        fetchMenu();
    }, []);


    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data)

    }

    if (resInfo === null) return <Shimmer />;
    

    console.log(itemCards);

    const [resInfo, setResInfo] = useState(resInfo)


    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} -{costForTwoMessage}</p>
            <h2>Menu</h2>

            {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs"} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} </li>)}

        </div>
    )
};



export default RestaurantMenu;