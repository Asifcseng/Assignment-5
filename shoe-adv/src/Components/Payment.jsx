import React, { useState } from "react";
import "./Payment.css";

const Payment = ({ total }) => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [success, setSuccess] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();

    setIsProcessing(true);

    setTimeout(() => {
      setSuccess(true);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>

      {success ? (
        <div className="success-message">
          ✅ Payment of ₹{total} successful! <br />
          Thank you, <strong>{name}</strong>.
        </div>
      ) : (
        <form className="payment-form" onSubmit={handlePayment}>
          <input
            type="text"
            placeholder="Full Name (as on card)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Card Number (16 digits)"
            maxLength="16"
            value={card}
            onChange={(e) => setCard(e.target.value.replace(/\D/g, ""))}
            required
          />
          <div className="payment-row">
            <input
              type="text"
              placeholder="MM/YY"
              maxLength="5"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="CVV"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              required
            />
          </div>

          <button type="submit" disabled={isProcessing}>
            {isProcessing ? "Processing..." : `Pay ₹${total}`}
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;
