import { useParams } from 'react-router';
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

function Shop() {
  let { name } = useParams();
  const [getItems, setGetItem] = useState([]);
  const [cart, setCart] = useState([]);

  const handleCart = (e) => {
    setCart((prevItem) => [...prevItem, e]);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.in/api/products')
      .then((response) => response.json())
      .then((json) => setGetItem(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="shop">
      {name === 'shopping-cart' ? (
        <ShoppingCart cart={cart} />
      ) : (
        <>
          {getItems.products.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <p>${item.price}</p>
                <button onClick={() => handleCart(item)}>add to cart</button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Shop;
