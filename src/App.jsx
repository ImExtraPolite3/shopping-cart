import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';
import Shop from './Components/Shop';

function App() {
  let { name } = useParams();
  const [getItems, setGetItem] = useState([]);
  const [getProduct, setGetProduct] = useState('');

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
          <Product showProduct={getProduct} />
        ) : name === 'shopping-cart' ? (
          <ShoppingCart cart={'shopping cart'} />
        ) : (
          <Shop allItems={getItems} showProduct={setGetProduct} />
        )}
      </div>
    </>
  );
}

export default App;
