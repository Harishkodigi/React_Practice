import { CDN_URL} from "../utils/constants";

const RestaurantCard = (props) => {
    const { resdata } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resdata?.info
    const { deliveryTime } = resdata.info.sla
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-img" src={CDN_URL + cloudinaryImageId} alt="res-img" />
            <h4>{name}</h4>
            <h6>{cuisines.join(',')}</h6>
            <h6>{avgRating} Star</h6>
            <h6>{costForTwo}</h6>
            <h6>{deliveryTime} mnts</h6>
        </div>
    )
}

export default RestaurantCard;