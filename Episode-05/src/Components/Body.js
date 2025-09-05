// src/Components/Body.js
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful Variable

    const [listofRestaurants,setListofRestaurants]=useState(resList);

  // Normal JS variable
  let listofRestaurantsJs=[{
    id: "750591",
    resName: "Meghna Foods",
    cuisines: "Biryani, North Indian, Asian",
    avgRating: "3.4",
    Time: "30 minutes",
    imageId:
    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
  },
  {
    id: "750579",
    resName: "KFC",
    cuisines: "Burger, Fast Food",
    avgRating: "4.5",
    Time: "30 minutes",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
  },{
    id: "749760",
    resName: "Pizza Palace",
    cuisines: "Italian, Pizza, Fast Food",
    avgRating: "4.2",
    Time: "25 minutes",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
  },
  {
    id: "749772",
    resName: "Noodle House",
    cuisines: "Chinese, Noodles, Asian",
    avgRating: "4.3",
    Time: "35 minutes",
    imageId:
      "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
  }];

  return (
    <div className="body">
      <div className="flter">
        <button className="filter-btn"
        onClick={()=>{
          // Filter logic here
          const filter=listofRestaurants.filter((res)=>res.avgRating>4);
          setListofRestaurants(filter);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            resName={restaurant.resName}
            cuisines={restaurant.cuisines}
            resRating={restaurant.avgRating}
            Time={restaurant.Time}
            imageId={restaurant.imageId}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
