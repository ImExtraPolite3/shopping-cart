import { Link } from 'react-router';

const menuItems = ['Men', 'Women', 'Jewelry', 'Electronics'];
const menuId = [
  "men's clothing",
  "women's clothing",
  'jewelery',
  'electronics',
];

export default function Menu({ closeMenu }) {
  return (
    <div className="menu">
      {menuItems.map((item, index) => {
        return (
          <Link to="/" key={index} onClick={closeMenu}>
            <button id={menuId[index]}>{item}</button>
          </Link>
        );
      })}
    </div>
  );
}
