export default function Product({ showProduct, addToCart }) {
  return (
    <div className="product">
      <img src={showProduct.image} alt={showProduct.title} />
      <h1>{showProduct.title}</h1>
      <div className="product-increase">
        <button>-</button>
        <h2>1</h2>
        <button>+</button>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
