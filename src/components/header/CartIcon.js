import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import cartIcon from "../../cart.svg"; 

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon">
      <img src={cartIcon} alt="Cart" />
      {cart.length > 0 && <span className="cart-item-count">{cart.length}</span>}
    </Link>
  );
};

export default CartIcon;
