import { Link } from 'react-router';

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
      <p>${showProduct.price}</p>
      <div className="product-increase">
        <button onClick={decrease}>-</button>
        <h3>{numOfItem}</h3>
        <button onClick={increase}>+</button>
      </div>
      <Link to="/" onClick={addToCart}>
        Add to Cart
      </Link>
    </div>
  );
}
