function ShoppingCart({ cart, removeCart }) {
  return (
    <div className="shopping-cart">
      {cart.map((item, index) => {
        return (
          <div key={index}>
            <div className="cart-image">
              <img src={item[0].image} alt={item[0].title} />
            </div>
            <div className="cart-info">
              <h3>{item[0].title}</h3>
              <p> {`amount: ${item[1]}`}</p>
              <img
                src="/delete.svg"
                alt="delete"
                onClick={() => removeCart(item)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
