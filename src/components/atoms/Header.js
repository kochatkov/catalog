import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartButton } from '../atoms/CartButton';
import { cartPageSelectors } from '../../modules/cartPage/cartPageSelectors';
import { routing } from '../../configuration/routing';
import { history } from '../../configuration/history';

export const Header = () => {
  const amountOfProducts = useSelector(cartPageSelectors.getAmountOfProducts);
  const totalPrice = useSelector(cartPageSelectors.getTotalPrice);

  const [price, setPrice] = useState(totalPrice);
  const [productsAmount, setProductsAmount] = useState(amountOfProducts);

  useEffect(() => {
    const cartPage = JSON.parse(sessionStorage.getItem('cartPage'));

    setPrice(cartPage.totalPrice);
    setProductsAmount(cartPage.amountOfProducts);
  }, []);

  return (
    <div className="Header">
      <p className="Header__total-price">{totalPrice ? `${totalPrice} грн.` : null}</p>
      <CartButton 
        amount={amountOfProducts ? amountOfProducts : 0} 
        onClick={() => history.push(routing().cartPage)}
      />
    </div>
  )
}
