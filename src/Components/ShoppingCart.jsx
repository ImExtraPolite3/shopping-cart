function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      {cart.map((item, index) => {
        return (
          <div key={index}>
            <img src={item[0].image} alt={item[0].title} />
            <h3>{item[0].title}</h3>
            <p>amount: {item[1]}</p>
            <button>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
