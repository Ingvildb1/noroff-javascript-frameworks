import React, { useContext } from "react";
import { CartContext } from "../../App";
import { Product } from "./Home";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>CartPage</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;

