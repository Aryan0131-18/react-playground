import React from "react";
import ReactDOM from "react-dom/client";

/**
 * ->Header
 * -Logo
 * -Nav-Items
 * 
 * ->Body
 * -Search
 * -RestaurantContainer
 * -RestaurantCard
 * -img
 * -Name,Star Rating,Cusine,Delivery Time
 * 
 * ->Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


const Header=()=>{
    return(
        <div className="header">
            <div className="logo-Container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXm-Lz1wqab2UY4q-vR2b1nEBH3NHEPpIsA&s"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

const RestaurantCard=(props)=>{
    const REST_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const imageUrl = REST_IMG_URL + props.imageId;
    return( 
        <div className="res-card">
        <img className="res-logo" alt={props.resName} src={imageUrl}/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
            <h4>{props.resRating}</h4>
            <h4>{props.Time}</h4>
        </div>
    )
}

const resList=[
    {
        id: "750591",
        resName: "Meghna Foods",
        cuisines: "Biryani, North Indian, Asian",
        resRating: "4.4",
        Time: "30 minutes",
        imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"
    },
    {
        id: "750579",
        resName: "KFC",
        cuisines: "Burger, Fast Food",
        resRating: "4.5",
        Time: "30 minutes",
        imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png"
    },
    {
        id: "749760",
        resName: "Pizza Palace",
        cuisines: "Italian, Pizza, Fast Food",
        resRating: "4.2",
        Time: "25 minutes",
        imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png"
    },
    {
        id: "749772",
        resName: "Noodle House",
        cuisines: "Chinese, Noodles, Asian",
        resRating: "4.3",
        Time: "35 minutes",
        imageId: "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"
    }
];


const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        resName={restaurant.resName}
                        cuisines={restaurant.cuisines}
                        resRating={restaurant.resRating}
                        Time={restaurant.Time}
                        imageId={restaurant.imageId}
                    />
                ))}
            </div>
        </div>
    )
}

const Applayout =()=> {
    return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
    )
}




const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(<Applayout/>);
 