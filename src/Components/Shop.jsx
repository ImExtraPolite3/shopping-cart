import { Link } from 'react-router';

function Shop({ allItems, showProduct, numOfItem }) {
  return (
    <div className="shop">
      {console.log(numOfItem)}
      {allItems.map((item, index) => {
        return (
          <Link
            to="/product"
            key={index}
            onClick={() => showProduct([item, numOfItem])}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>$ {item.price}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Shop;
