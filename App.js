import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?w=740&t=st=1694161335~exp=1694161935~hmac=68b47429a6bcd85f7c87f72b17bf339ca17bd33282f33630ba909b1d86676212"
                    alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>


        </div>
    )

}

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv" alt="res-img" />
            <h3>MehanaFoods</h3>
            <h5>Biryani,South india</h5>
            <h6>4.4 Star</h6>
            <h6>30 mnts</h6>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body" >
            <div className="search">search</div>
            <div className="res-container" >
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> 
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    )
}

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);


