function ShoppingCart({ cart }) {
  return (
    <>
      {cart.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default ShoppingCart;
