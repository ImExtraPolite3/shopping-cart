function ShoppingCart({ cart }) {
  return (
    <div>
      {cart.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
}

export default ShoppingCart;
