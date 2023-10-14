import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { Product } from "./Home";
import './../../App.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        <ul className="cart">
          {cart.map((item) => (
            <li key={item.id}>
              <Product item={item} />
              <button className="removebtn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="total">Total Price: ${totalPrice.toFixed(2)}</h4>
        <Link to="/checkout" className="toCheckout">Go to Checkout</Link> {/* Add a link to the CheckoutPage */}
      </div>
    </div>
  );
};

export default CartPage;


