import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resdata?.info
    const { deliveryTime } = resdata.info.sla
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
            <img className="rounded-xl" src={CDN_URL + cloudinaryImageId} alt="res-img" />

            <h4 className="font-bold py-2 text-lg">{name}</h4>
            <h6 className="overflow-clip">{cuisines.join(',')}</h6>
            <h6>{avgRating} Star</h6>
            <h6>{costForTwo}</h6>
            <h6>{deliveryTime} mnts</h6>
        </div>
    )
}

export default RestaurantCard;