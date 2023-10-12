import React, { useContext } from "react";
import { CartContext } from "../../App";
import { Product } from "./Home";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <Product item={item} />
              <button className="removebtn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default CartPage;


