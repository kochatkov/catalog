import React from 'react';
import { useDispatch } from 'react-redux';
import { CounterButton } from '../molecules/CounterButton';
import { updateProductQuantity } from '../../modules/cartPage/cartPageActionCreators';

export const CartItem = ({ item, productType, quantity }) => {
  const dispatch = useDispatch();

  return (
    <section className="CartItem">
      <div className="CartItem__left">
        <img src={item.img} />
        <div>
          <p><strong>Назва продукту:</strong><br/> {productType}</p>
          <p><strong>Ціна:</strong> {item.price}</p>
        </div>
      </div>
      <div className="CartItem__counter-container">
        <CounterButton 
          mark="-" 
          onClick={() => dispatch(updateProductQuantity({item, quantity: quantity - 1}))}
        />
        <p>{quantity}</p>
        <CounterButton 
          mark="+"
          onClick={() => dispatch(updateProductQuantity({item, quantity: quantity + 1}))} 
        />
      </div>
    </section>
  )
}
