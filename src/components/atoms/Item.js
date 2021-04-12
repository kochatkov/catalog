import React from 'react';

import { Button } from '../atoms/Button';

export const Item = ({
   product,
   img,
   title,
   productType,
   price,
   handleAddProductToCart,
   handleDisableButton
 }) => {

  const isDisabled = handleDisableButton(product.id);

  return (
    <div className="Item">
      <img className="Item__img" src={img} />
      <p className="Item__text">Назва продукту: <span className="Item__name">{productType}</span> </p>
      <p className="Item__text">Про товар: <br/> <span className="Item__title-text">{title}</span> </p>
      <p className="Item__text">Ціна: <span className="Item__name">{price} грн.</span></p>
      <Button
        onClick={() => handleAddProductToCart(product)}
        disabled={isDisabled}
      >
        Додати до кошика
      </Button>
    </div>
  )
}
