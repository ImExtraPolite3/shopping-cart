function ShoppingCart({ cart, removeCart }) {
  let itemPrice = cart.reduce(
    (acc, current) => acc + current[0].price * current[1],
    0
  );

  return (
    <>
      <div className="shopping-cart">
        {cart.map((item, index) => {
          return (
            <div key={index}>
              <div className="cart-image">
                <img src={item[0].image} alt={item[0].title} />
              </div>
              <div className="cart-info">
                <div>
                  <h4>{item[0].title}</h4>
                  <p> {`amount: ${item[1]}`}</p>
                </div>
                <img
                  src="/delete.svg"
                  alt="delete"
                  onClick={() => removeCart(item)}
                />
              </div>
            </div>
          );
        })}
        <div className="checkout">
          <h3>${itemPrice}</h3>
          <button>proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
