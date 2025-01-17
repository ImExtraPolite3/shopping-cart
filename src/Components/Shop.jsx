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
    fetch('https://fakestoreapi.com/products')
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
          {getItems.map((item) => {
            return (
              <div key={item.id} onClick={() => handleCart(item)}>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Shop;
