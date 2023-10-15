import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import './../../App.css';

const CheckoutPage = () => {
  const { setCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Clear the cart
    setCart([]);

    // Show a popup alert
    window.alert("Thank you for your purchase!");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Almost done! Complete the check out by confirming</p>
      <button className="checkoutbtn" onClick={handleCheckout}>
        Complete Checkout
      </button>
      <div className="homeLink">
        <Link to="/" className="checkoutLink">
          Or go back to store
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;

