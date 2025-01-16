import { useParams } from 'react-router';
import ShoppingCart from './ShoppingCart';

function Shop() {
  let { name } = useParams();

  return (
    <div className="shop">
      {name === 'shopping-cart' ? <ShoppingCart /> : <h1>shop</h1>}
    </div>
  );
}

export default Shop;
