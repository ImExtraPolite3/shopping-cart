export default function Product({ showProduct, addToCart }) {
  return (
    <div className="product">
      <img src={showProduct.image} alt={showProduct.title} />
      <h1>{showProduct.title}</h1>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
