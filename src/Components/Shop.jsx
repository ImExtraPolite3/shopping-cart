import { useParams } from 'react-router';
import ShoppingCart from './ShoppingCart';
import { useEffect, useState } from 'react';

function Shop() {
  let { name } = useParams();
  const [getItems, setGetItem] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setGetItem(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="shop">
      {name === 'shopping-cart' ? (
        <ShoppingCart />
      ) : (
        <>
          {getItems.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </>
      )}
    </div>
  );
}

export default Shop;
