function ShoppingCart({ cart }) {
  return (
    <>
      {cart.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </>
  );
}

export default ShoppingCart;
