import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';
import Shop from './Components/Shop';

function App() {
  const [getItems, setGetItem] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setGetItem(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav>
        <h1>StoreName</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/shopping-cart">Shopping cart</Link>
        </div>
      </nav>
      <div>
        {name === 'product' ? (
          <Product />
        ) : name === 'shopping-cart' ? (
          <ShoppingCart cart={'shopping cart'} />
        ) : (
          <Shop />
        )}
      </div>
    </>
  );
}

export default App;
