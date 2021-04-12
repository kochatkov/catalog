import React from 'react';
import { useSelector } from 'react-redux';
import { cartPageSelectors } from '../modules/cartPage/cartPageSelectors';
import { CartItem } from '../components/molecules/CartItem';
import OrderForm from '../components/molecules/OrderForm';

export const CartPage = () => {
  const products = useSelector(cartPageSelectors.getProductsForBuying);
  const totalPrice = useSelector(cartPageSelectors.getTotalPrice);


  return (
    <div className="CartPage">
      <div className="CartPage__wrapper">
        <div className="CartPage__list">
          {products.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              price={item.price}
              productType={item.productType}
              quantity={item.quantity ? item.quantity : 1}
            />
          ))} 
        </div>
        
        <OrderForm />
      </div>
      
      <h3>{totalPrice ? `Сума: ${totalPrice} грн.` : null}</h3>
    </div>
  )
}
