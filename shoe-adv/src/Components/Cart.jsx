import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/cartSlice";
import Payment from "./Payment";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const [showPayment, setShowPayment] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p className="empty-cart-msg">No items in cart.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name || "Product image"}
                onError={(e) => {
                  e.target.src = "/fallback.png"; // optional fallback image
                  e.target.alt = "Image not available";
                }}
              />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                <div className="quantity-control">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity <= 1}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>

                <p>Subtotal: ₹{item.price * item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Grand Total: ₹{total.toFixed(2)}</h3>

            {!showPayment && (
              <button
                className="proceed-btn"
                onClick={() => setShowPayment(true)}
              >
                Proceed to Payment
              </button>
            )}
          </div>

          {showPayment && <Payment total={total} />}
        </>
      )}
    </div>
  );
};

export default Cart;
