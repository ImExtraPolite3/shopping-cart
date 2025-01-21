function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      {cart.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
