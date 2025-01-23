import { Link } from 'react-router';

const menuItems = ['Men', 'Women', 'Jewelry', 'Electronics'];

export default function Menu({ closeMenu }) {
  return (
    <div className="menu">
      {menuItems.map((item, index) => {
        return (
          <Link to="/" key={index} onClick={closeMenu}>
            <button>{item}</button>
          </Link>
        );
      })}
    </div>
  );
}
