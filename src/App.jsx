import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Product from './Components/Product';
import ShoppingCart from './Components/ShoppingCart';
import Shop from './Components/Shop';
import Menu from './Components/Menu';

function App() {
  let { name } = useParams();
  const [getItems, setGetItem] = useState([]);
  const [filterItems, setFilterItem] = useState([]);
  const [getProduct, setGetProduct] = useState('');
  const [getCart, setCart] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [afterClick, setAfterClick] = useState({
    screenHeight: '100%',
    screenScroll: scrollY,
  });
  const [numOfItem, setNumOfItem] = useState(1);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setGetItem(json))
      .catch((error) => console.log(error));
  }, []);

  const handleFilter = (e) => {
    setSelected(true);
    setFilterItem(getItems.filter((items) => items.category === e.target.id));
  };

  const handleTrue = () => {
    if (clicked === false) {
      setClicked(true);
      setAfterClick((prevChoice) => ({
        ...prevChoice,
        screenHeight: '100vh',
        screenScroll: 'hidden',
      }));
    }
  };

  const handleFalse = () => {
    if (clicked === true) {
      setClicked(false);
      setAfterClick((prevChoice) => ({
        ...prevChoice,
        screenHeight: '100',
        screenScroll: 'scroll',
      }));
    }
  };

  const handleCart = () => {
    const cartItem = [getProduct, numOfItem, getProduct.price * numOfItem];

    setCart((prevItem) => {
      const newArray = prevItem.filter((item) => item[0].id !== getProduct.id);

      return [...newArray, cartItem];
    });
  };

  const handleClicked = () => {
    handleTrue();
    handleFalse();
  };

  return (
    <div
      id="container"
      style={{
        height: afterClick.screenHeight,
        overflowY: afterClick.screenScroll,
      }}
    >
      <nav>
        <img onClick={handleClicked} src="/menu.svg" alt="" />
        <Link
          to="/"
          onClick={() => {
            handleFalse();
            setNumOfItem(1);
            setSelected(false);
          }}
        >
          <h1>StoreName</h1>
        </Link>
        <Link to="/shopping-cart" onClick={handleFalse}>
          <img src="/cart-outline.svg" alt="" />
          <p className="in-cart">{getCart.length}</p>
        </Link>
      </nav>
      {clicked && (
        <Menu
          closeMenu={(e) => {
            handleFalse();
            handleFilter(e);
          }}
        />
      )}
      <div>
        {name === 'product' ? (
          <Product
            showProduct={getProduct}
            addToCart={handleCart}
            decrease={() =>
              setNumOfItem((prevNum) =>
                prevNum > 1 ? prevNum - 1 : (prevNum = 1)
              )
            }
            increase={() => setNumOfItem((prevNum) => prevNum + 1)}
            numOfItem={numOfItem}
          />
        ) : name === 'shopping-cart' ? (
          getCart.length > 0 ? (
            <ShoppingCart
              cart={getCart}
              numOfItem={numOfItem}
              removeCart={(e) => setCart(getCart.filter((item) => item !== e))}
            />
          ) : (
            <div className="empty-cart">Cart is empty! Add items to cart !</div>
          )
        ) : (
          <Shop
            allItems={selected === false ? getItems : filterItems}
            showProduct={setGetProduct}
          />
        )}
      </div>
    </div>
  );
}

export default App;
