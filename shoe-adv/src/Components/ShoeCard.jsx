import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import "./ShoeCard.css"; // assume styling is here

const ShoeCard = ({ shoe }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className="shoe-card">
      <img
        src={shoe.image}
        alt={shoe.name || "Shoe"}
        className="shoe-image"
        onError={(e) => {
          e.target.src = "/fallback.png";
          e.target.alt = "Image not available";
        }}
      />
      <div className="shoe-info">
        <h3 className="shoe-name">{shoe.name}</h3>
        <p className="shoe-price">₹{shoe.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          aria-label={`Add ${shoe.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShoeCard;
