import React from 'react';

export const CartButton = ({ amount, ...rest }) => {
  return (
    <button className="CartButton" {...rest}>
      <img 
        className="CartButton__cart-img" 
        src="/cart.png" 
        alt="cart-logo" 
      />
      <span className="CartButton__cart-counter">{amount}</span>
    </button>
  )
}
