import { Link } from 'react-router';

function Shop({ allItems, showProduct }) {
  return (
    <div className="shop">
      {allItems.map((item, index) => {
        return (
          <Link to="/product" key={index}>
            <div onClick={() => showProduct(item)}>{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
