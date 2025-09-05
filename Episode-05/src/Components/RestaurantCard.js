// src/Components/RestaurantCard.js
const RestaurantCard = (props) => {
  const REST_IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const imageUrl = REST_IMG_URL + props.imageId;

  return (
    <div className="res-card">
      <img className="res-logo" alt={props.resName} src={imageUrl} />
      <h3>{props.resName}</h3>
      <h4>{props.cuisines}</h4>
      <h4>{props.resRating}</h4>
      <h4>{props.Time}</h4>
    </div>
  );
};

export default RestaurantCard;
