import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import './../../App.css';


const CheckoutPage = () => {
  const { setCart } = useContext(CartContext);

  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Almost done! Complete the check out by confirming</p>
      <button className="checkoutbtn" onClick={handleCheckout}>Complete Checkout</button>
    <div className="homeLink">
    <Link to="/" className="checkoutLink">Or go back to store</Link>
    </div>
    </div>
  );
};

export default CheckoutPage;
