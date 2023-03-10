import React from "react";

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-page">
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
