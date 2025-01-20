export default function Product({ showProduct, addToCart }) {
  return (
    <div>
      {showProduct.title}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
