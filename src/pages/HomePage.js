import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { products } from '../products';
import { fetchProducts } from '../modules/homePage/homePageActionCreators';
import { homePageSelectors } from '../modules/homePage/homePageSelectors';
import { Item } from '../components/atoms/Item';
import { addProductToCart } from '../modules/cartPage/cartPageActionCreators';
import { cartPageSelectors } from '../modules/cartPage/cartPageSelectors';

export const HomePage = () => {
  const dispatch = useDispatch();
  const readyProducts = useSelector(homePageSelectors.getProducts);
  const productsInCart = useSelector(cartPageSelectors.getProductsForBuying);

  useEffect(() => {
    dispatch(fetchProducts(products))
  }, []);

  const handleAddProductToCart = useCallback((product) => {
    dispatch(addProductToCart(product));
    }, [dispatch, addProductToCart]);

  const handleDisableButton = useCallback((id) => {
    if (!productsInCart.length) return false;
  
    let result;
  
    productsInCart.forEach(product => {
      if (product.id === id) {
        result = true;
      }
    });
  
    return result;
  }, [productsInCart]);

  return (
    <section className="HomePage">
      <div className="HomePage__list">
        {readyProducts.map(product => (
          <Item 
            key={product.id}
            product={product} 
            title={product.title}
            price={product.price}
            productType={product.productType}
            img={product.img}
            handleAddProductToCart={handleAddProductToCart}  
            handleDisableButton={handleDisableButton}
          />
        ))}
      </div>
    </section>
    
  )
}
