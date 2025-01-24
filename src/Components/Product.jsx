import { useState } from 'react';

export default function Product({
  showProduct,
  addToCart,
  numOfItem,
  decrease,
  increase,
}) {
  return (
    <div className="product">
      <img src={showProduct.image} alt={showProduct.title} />
      <h1>{showProduct.title}</h1>
      <div className="product-increase">
        <button onClick={decrease}>-</button>
        <h3>{numOfItem}</h3>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
