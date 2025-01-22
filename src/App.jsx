import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';
import Shop from './Components/Shop';
import Menu from './Components/Menu';

function App() {
  let { name } = useParams();
  const [getItems, setGetItem] = useState([]);
  const [getProduct, setGetProduct] = useState('');
  const [getCart, setCart] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setGetItem(json))
      .catch((error) => console.log(error));
  }, []);

  const handleCart = () => {
    setCart((prevItem) => [...prevItem, getProduct]);
  };

  const handleClicked = () => {
    if (clicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleClicked}>menu</button>
        <Link to="/">
          <h1>StoreName</h1>
        </Link>
        <Link to="/shopping-cart">Shopping cart</Link>
      </nav>
      {clicked && <Menu />}
      <div>
        {name === 'product' ? (
          <Product showProduct={getProduct} addToCart={handleCart} />
        ) : name === 'shopping-cart' ? (
          <ShoppingCart cart={getCart} />
        ) : (
          <Shop allItems={getItems} showProduct={setGetProduct} />
        )}
      </div>
    </>
  );
}

export default App;
